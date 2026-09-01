import { useState, useEffect } from 'react';

export default function Home({ user }) {
  const [betAmount, setBetAmount] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);
  const [history, setHistory] = useState([]);

  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/lottery/results');
        const data = await res.json();
        if (res.ok) setHistory(data);
      } catch (err) {
        console.error('Error fetching history:', err);
      }
    };
    fetchHistory();
  }, []);

  const handleBet = async () => {
    if (!user) {
      alert("Please login to place a bet");
      return;
    }
    if (!selectedOption) {
      alert("Please select an option to bet on");
      return;
    }
    if (!betAmount || isNaN(betAmount) || betAmount <= 0) {
      alert("Please enter a valid bet amount");
      return;
    }
    try {
      const res = await fetch('http://localhost:5000/api/lottery/bet', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: user.id,
          betType: selectedOption.includes('Number') ? 'number' : 'size',
          betValue: selectedOption.replace('Number ', ''),
          amount: parseFloat(betAmount)
        })
      });
      const data = await res.json();
      if (res.ok) {
        alert(data.message);
        setBetAmount('');
        setSelectedOption(null);
        // Note: In a real app we would update the user context balance here
      } else {
        alert(data.message || 'Bet placement failed');
      }
    } catch (err) {
      console.error('Betting error:', err);
      alert('Network error placing bet');
    }
  };

  return (
    <div className="home-container">
      {/* Banner Placeholder */}
      <div className="banner card glass-panel" style={{ textAlign: 'center', padding: '40px 20px', background: 'linear-gradient(90deg, #12284C 0%, #00E5FF 100%)', color: '#fff' }}>
        <h2>Welcome to SattaGo</h2>
        <p>Play securely & win big!</p>
      </div>

      {/* Lottery Section */}
      <div className="lottery-section card glass-panel" style={{ marginTop: '20px' }}>
        <h3 className="card-title text-accent flex-between">
          <span>Live Lottery</span>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Next draw: 08:30 PM</span>
        </h3>

        <div className="betting-options" style={{ marginBottom: '20px' }}>
          <p className="text-muted" style={{ marginBottom: '10px' }}>Select Number:</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
            {numbers.map(num => (
              <button
                key={`num-${num}`}
                onClick={() => setSelectedOption(`Number ${num}`)}
                style={{
                  width: '45px', height: '45px', borderRadius: '50%',
                  background: selectedOption === `Number ${num}` ? 'var(--primary-accent)' : 'var(--glass-bg)',
                  color: selectedOption === `Number ${num}` ? '#000' : 'var(--text-main)',
                  border: `1px solid ${selectedOption === `Number ${num}` ? 'var(--primary-accent)' : 'var(--glass-border)'}`,
                  fontSize: '1.2rem', fontWeight: 'bold'
                }}
              >
                {num}
              </button>
            ))}
          </div>
        </div>

        <div className="betting-options" style={{ marginBottom: '20px' }}>
          <p className="text-muted" style={{ marginBottom: '10px' }}>Or Select Size:</p>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              onClick={() => setSelectedOption('Big')}
              style={{
                flex: 1, padding: '15px', borderRadius: '8px',
                background: selectedOption === 'Big' ? 'var(--primary-accent)' : 'var(--glass-bg)',
                color: selectedOption === 'Big' ? '#000' : 'var(--text-main)',
                border: `1px solid ${selectedOption === 'Big' ? 'var(--primary-accent)' : 'var(--glass-border)'}`,
                fontWeight: 'bold', fontSize: '1.1rem'
              }}
            >
              Big
            </button>
            <button
              onClick={() => setSelectedOption('Small')}
              style={{
                flex: 1, padding: '15px', borderRadius: '8px',
                background: selectedOption === 'Small' ? 'var(--primary-accent)' : 'var(--glass-bg)',
                color: selectedOption === 'Small' ? '#000' : 'var(--text-main)',
                border: `1px solid ${selectedOption === 'Small' ? 'var(--primary-accent)' : 'var(--glass-border)'}`,
                fontWeight: 'bold', fontSize: '1.1rem'
              }}
            >
              Small
            </button>
          </div>
        </div>

        {selectedOption && (
          <div className="bet-placement" style={{ background: 'rgba(0,0,0,0.2)', padding: '15px', borderRadius: '8px', marginTop: '15px' }}>
            <p style={{ marginBottom: '10px' }}>Selected: <span className="text-accent font-bold">{selectedOption}</span></p>
            <div className="input-group" style={{ marginBottom: '15px' }}>
              <input
                type="number"
                className="input-field"
                placeholder="Enter amount (₹)"
                value={betAmount}
                onChange={(e) => setBetAmount(e.target.value)}
              />
            </div>
            <button className="btn-primary" onClick={handleBet}>Place Bet</button>
          </div>
        )}
      </div>

      {/* History Section */}
      <div className="history-section card glass-panel">
        <h3 className="card-title text-accent">Recent Results</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {history.map((item, index) => (
            <div key={item.id} className="flex-between" style={{ padding: '10px', background: index === 0 ? 'rgba(0, 229, 255, 0.1)' : 'var(--glass-bg)', borderRadius: '8px', border: index === 0 ? '1px solid var(--primary-accent)' : '1px solid var(--glass-border)' }}>
              <div>
                <span style={{ fontWeight: 'bold', fontSize: '1.2rem', marginRight: '15px' }}>{item.winning_number}</span>
                <span className={item.winning_size === 'Big' ? 'text-success' : 'text-danger'}>{item.winning_size}</span>
              </div>
              <span className="text-muted" style={{ fontSize: '0.9rem' }}>
                {new Date(item.draw_date).toLocaleDateString()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
