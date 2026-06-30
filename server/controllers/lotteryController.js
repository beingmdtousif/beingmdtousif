const pool = require('../db');

exports.getLatestResults = async (req, res) => {
  try {
    const [results] = await pool.execute('SELECT * FROM LotteryResults ORDER BY draw_date DESC, session_id DESC LIMIT 5');
    // If DB is empty, return dummy data so the UI doesn't look broken during prototyping
    if (results.length === 0) {
      return res.json([
        { id: 1, winning_number: 7, winning_size: 'Big', draw_date: new Date() },
        { id: 2, winning_number: 2, winning_size: 'Small', draw_date: new Date() }
      ]);
    }
    res.json(results);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching results', error: error.message });
  }
};

exports.placeBet = async (req, res) => {
  const { userId, betType, betValue, amount } = req.body;
  try {
    // Basic validation & deduction logic
    const [wallets] = await pool.execute('SELECT id, balance FROM Wallets WHERE user_id = ?', [userId]);
    if (!wallets.length || wallets[0].balance < amount) {
      return res.status(400).json({ message: 'Insufficient balance' });
    }

    await pool.execute('UPDATE Wallets SET balance = balance - ? WHERE user_id = ?', [amount, userId]);

    // Just mock the bet insertion for now
    res.json({ message: `Successfully placed bet of ₹${amount} on ${betValue}`, newBalance: wallets[0].balance - amount });
  } catch (error) {
    res.status(500).json({ message: 'Bet placement failed', error: error.message });
  }
};
