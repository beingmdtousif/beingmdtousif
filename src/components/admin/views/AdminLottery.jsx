import { useState } from 'react';

export default function AdminLottery() {
  const [selectedWinningNumber, setSelectedWinningNumber] = useState(null);
  const [multiplier, setMultiplier] = useState(2.0);

  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const handlePublish = () => {
    if (selectedWinningNumber === null) {
      alert('Please select a winning number first.');
      return;
    }
    alert(`Published Result: ${selectedWinningNumber} with ${multiplier}x multiplier! (Big/Small calculated automatically based on bets)`);
  };

  return (
    <div>
      <h2 className="text-success" style={{ marginBottom: '20px' }}>Lottery Management</h2>

      <div className="card glass-panel" style={{ maxWidth: '600px', marginBottom: '20px' }}>
        <h3 style={{ marginBottom: '15px' }}>Current Session: 08:30 PM</h3>

        <div style={{ background: 'rgba(0,0,0,0.2)', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
          <h4 style={{ marginBottom: '10px', color: 'var(--text-muted)' }}>Select Winning Number</h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {numbers.map(num => (
              <button
                key={`win-${num}`}
                onClick={() => setSelectedWinningNumber(num)}
                style={{
                  width: '45px', height: '45px', borderRadius: '50%',
                  background: selectedWinningNumber === num ? 'var(--success)' : 'var(--glass-bg)',
                  color: selectedWinningNumber === num ? '#000' : 'var(--text-main)',
                  border: `1px solid ${selectedWinningNumber === num ? 'var(--success)' : 'var(--glass-border)'}`,
                  fontSize: '1.2rem', fontWeight: 'bold'
                }}
              >
                {num}
              </button>
            ))}
          </div>
        </div>

        <div className="input-group">
          <label>Winning Multiplier (x)</label>
          <input
            type="number"
            step="0.1"
            className="input-field"
            value={multiplier}
            onChange={(e) => setMultiplier(e.target.value)}
          />
        </div>

        <button
          className="btn-primary"
          style={{ background: 'var(--success)', color: '#000', marginTop: '10px' }}
          onClick={handlePublish}
        >
          Publish Result
        </button>
      </div>

      <div className="card glass-panel" style={{ maxWidth: '600px' }}>
        <h3 style={{ marginBottom: '15px' }}>Automated Stats (Preview)</h3>
        <div className="flex-between" style={{ padding: '10px', background: 'rgba(0,0,0,0.2)', borderRadius: '8px' }}>
          <div>
            <p className="text-muted">Total Bets (Big)</p>
            <p style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>120</p>
          </div>
          <div>
            <p className="text-muted">Total Bets (Small)</p>
            <p style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>80</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p className="text-muted">System Pick</p>
            <p className="text-danger" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Small</p>
            <p style={{ fontSize: '0.7rem' }}>(Opposite of majority)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
