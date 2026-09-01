const pool = require('../db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  const { name, mobile, password, referralCode } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    // Note: skipping exact referral logic for simple prototype
    const [result] = await pool.execute(
      'INSERT INTO Users (full_name, mobile_number, password_hash, referral_code) VALUES (?, ?, ?, ?)',
      [name, mobile, hashedPassword, referralCode || Math.random().toString(36).substring(2, 8).toUpperCase()]
    );

    await pool.execute('INSERT INTO Wallets (user_id, balance) VALUES (?, ?)', [result.insertId, 1000]); // Give 1000 starting balance

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Registration failed', error: error.message });
  }
};

exports.login = async (req, res) => {
  const { mobile, password } = req.body;
  try {
    const [users] = await pool.execute('SELECT * FROM Users WHERE mobile_number = ?', [mobile]);
    if (users.length === 0) return res.status(401).json({ message: 'Invalid credentials' });

    const user = users[0];
    const isMatch = await bcrypt.compare(password, user.password_hash);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    const [wallets] = await pool.execute('SELECT balance FROM Wallets WHERE user_id = ?', [user.id]);
    const balance = wallets[0] ? wallets[0].balance : 0;

    const token = jwt.sign({ userId: user.id, role: user.role }, process.env.JWT_SECRET || 'secret', { expiresIn: '1d' });

    res.json({ token, user: { id: user.id, name: user.full_name, mobile: user.mobile_number, role: user.role, balance } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Login failed', error: error.message });
  }
};
