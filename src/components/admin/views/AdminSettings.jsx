import { useState } from 'react';

export default function AdminSettings() {
  const [settings, setSettings] = useState({
    upiId: 'admin@sbi',
    cryptoAddress: '0x123abc456def7890',
    whatsapp: '+919876543210',
    beginnerGuide: 'Welcome to SattaGo! To start playing, simply deposit funds to your wallet and navigate to the Home screen to place your bets on Numbers or Big/Small.'
  });

  const handleChange = (e) => {
    setSettings({ ...settings, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    alert('Settings saved successfully!');
  };

  return (
    <div>
      <h2 className="text-success" style={{ marginBottom: '20px' }}>System Settings</h2>

      <div className="card glass-panel" style={{ maxWidth: '600px' }}>
        <form onSubmit={handleSave}>
          <div className="input-group">
            <label>Deposit UPI ID</label>
            <input
              type="text"
              name="upiId"
              className="input-field"
              value={settings.upiId}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Crypto Deposit Address (USDT)</label>
            <input
              type="text"
              name="cryptoAddress"
              className="input-field"
              value={settings.cryptoAddress}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Support WhatsApp Number</label>
            <input
              type="tel"
              name="whatsapp"
              className="input-field"
              value={settings.whatsapp}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Beginner Guide Content</label>
            <textarea
              name="beginnerGuide"
              className="input-field"
              style={{ minHeight: '100px', resize: 'vertical' }}
              value={settings.beginnerGuide}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn-primary" style={{ background: 'var(--success)', color: '#000', marginTop: '10px' }}>
            Save Settings
          </button>
        </form>
      </div>
    </div>
  );
}
