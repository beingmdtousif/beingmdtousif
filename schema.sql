-- SattaGo MySQL Database Schema

CREATE DATABASE IF NOT EXISTS sattago_db
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

USE sattago_db;

-- 1. Users Table
CREATE TABLE IF NOT EXISTS Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    mobile_number VARCHAR(15) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    referral_code VARCHAR(20) UNIQUE NOT NULL,
    referred_by INT DEFAULT NULL,
    role ENUM('user', 'admin') DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (referred_by) REFERENCES Users(id) ON DELETE SET NULL
);
CREATE INDEX idx_users_mobile ON Users(mobile_number);
CREATE INDEX idx_users_referral ON Users(referral_code);

-- 2. Wallets Table
CREATE TABLE IF NOT EXISTS Wallets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT UNIQUE NOT NULL,
    balance DECIMAL(15, 2) DEFAULT 0.00,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE
);

-- 3. Wallet Transactions Table
CREATE TABLE IF NOT EXISTS WalletTransactions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    wallet_id INT NOT NULL,
    type ENUM('deposit', 'withdrawal', 'bet_deduction', 'bet_winning', 'referral_bonus') NOT NULL,
    amount DECIMAL(15, 2) NOT NULL,
    status ENUM('pending', 'completed', 'failed') DEFAULT 'completed',
    reference_id VARCHAR(100) DEFAULT NULL, -- UTR, TX Hash, or Bet ID
    description VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (wallet_id) REFERENCES Wallets(id) ON DELETE CASCADE
);
CREATE INDEX idx_transactions_wallet ON WalletTransactions(wallet_id);

-- 4. Deposits Table
CREATE TABLE IF NOT EXISTS Deposits (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    method ENUM('upi', 'crypto') NOT NULL,
    amount_inr DECIMAL(15, 2) NOT NULL,
    amount_crypto DECIMAL(15, 6) DEFAULT NULL,
    exchange_rate DECIMAL(15, 4) DEFAULT NULL,
    reference_number VARCHAR(100) UNIQUE NOT NULL, -- UTR or TX Hash
    status ENUM('pending', 'approved', 'rejected') DEFAULT 'pending',
    admin_remark VARCHAR(255) DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE
);
CREATE INDEX idx_deposits_status ON Deposits(status);

-- 5. Withdrawals Table
CREATE TABLE IF NOT EXISTS Withdrawals (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    method ENUM('upi', 'bank') NOT NULL,
    amount DECIMAL(15, 2) NOT NULL,
    account_details JSON NOT NULL, -- Stores UPI ID or Bank Details as JSON
    status ENUM('pending', 'approved', 'rejected') DEFAULT 'pending',
    admin_remark VARCHAR(255) DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE
);
CREATE INDEX idx_withdrawals_status ON Withdrawals(status);

-- 6. Lottery Sessions Table
CREATE TABLE IF NOT EXISTS LotterySessions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    session_time TIME NOT NULL, -- e.g., '16:00:00' for 4 PM, '20:30:00' for 8:30 PM
    is_active BOOLEAN DEFAULT TRUE,
    multiplier DECIMAL(5, 2) DEFAULT 2.00,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- 7. Lottery Results Table
CREATE TABLE IF NOT EXISTS LotteryResults (
    id INT AUTO_INCREMENT PRIMARY KEY,
    session_id INT NOT NULL,
    draw_date DATE NOT NULL,
    winning_number INT NOT NULL CHECK (winning_number BETWEEN 0 AND 9),
    winning_size ENUM('Big', 'Small') NOT NULL,
    is_published BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (session_id) REFERENCES LotterySessions(id) ON DELETE CASCADE,
    UNIQUE KEY unique_daily_session (session_id, draw_date)
);

-- 8. Bets Table
CREATE TABLE IF NOT EXISTS Bets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    session_id INT NOT NULL,
    draw_date DATE NOT NULL,
    bet_type ENUM('number', 'size') NOT NULL,
    bet_value VARCHAR(10) NOT NULL, -- '0'-'9', 'Big', or 'Small'
    amount DECIMAL(15, 2) NOT NULL,
    potential_winning DECIMAL(15, 2) NOT NULL,
    status ENUM('pending', 'won', 'lost') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE,
    FOREIGN KEY (session_id) REFERENCES LotterySessions(id) ON DELETE CASCADE
);
CREATE INDEX idx_bets_user ON Bets(user_id);
CREATE INDEX idx_bets_session_date ON Bets(session_id, draw_date);

-- 9. Notifications Table
CREATE TABLE IF NOT EXISTS Notifications (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    title VARCHAR(100) NOT NULL,
    message TEXT NOT NULL,
    is_read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE
);

-- 10. System Settings Table
CREATE TABLE IF NOT EXISTS Settings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    setting_key VARCHAR(50) UNIQUE NOT NULL,
    setting_value TEXT NOT NULL,
    description VARCHAR(255) DEFAULT NULL,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert Default Settings
INSERT INTO Settings (setting_key, setting_value, description) VALUES
('upi_id', 'admin@sbi', 'Admin UPI ID for deposits'),
('crypto_wallet', '0x123abc456def7890', 'Admin USDT Wallet Address'),
('whatsapp_number', '+919876543210', 'Support WhatsApp Number'),
('beginner_guide', 'Welcome to SattaGo! To start playing, simply deposit funds to your wallet and navigate to the Home screen to place your bets on Numbers or Big/Small.', 'Beginner Guide Text');

-- Insert Default Lottery Sessions
INSERT INTO LotterySessions (session_time, multiplier) VALUES
('16:00:00', 2.00),
('20:30:00', 2.00);
