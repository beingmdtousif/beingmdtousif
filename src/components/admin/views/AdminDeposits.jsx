import { Check, X } from 'lucide-react';

export default function AdminDeposits() {
  const deposits = [
    { id: 'DEP001', user: 'User 123', method: 'UPI', amount: '₹500', utr: 'UTR897654321', status: 'Pending', date: 'Oct 24, 10:30 AM' },
    { id: 'DEP002', user: 'User 456', method: 'Crypto (USDT)', amount: '₹8,724 (100 USDT)', utr: '0x123...abc', status: 'Pending', date: 'Oct 24, 09:15 AM' },
  ];

  return (
    <div>
      <h2 className="text-success" style={{ marginBottom: '20px' }}>Deposit Requests</h2>

      <div className="card glass-panel" style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--glass-border)', color: 'var(--text-muted)' }}>
              <th style={{ padding: '15px' }}>ID</th>
              <th style={{ padding: '15px' }}>User</th>
              <th style={{ padding: '15px' }}>Method & Amount</th>
              <th style={{ padding: '15px' }}>Ref/Hash</th>
              <th style={{ padding: '15px' }}>Date</th>
              <th style={{ padding: '15px' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {deposits.map(dep => (
              <tr key={dep.id} style={{ borderBottom: '1px solid var(--glass-border)' }}>
                <td style={{ padding: '15px' }}>{dep.id}</td>
                <td style={{ padding: '15px' }}>{dep.user}</td>
                <td style={{ padding: '15px' }}>
                  <div style={{ fontWeight: 'bold' }}>{dep.amount}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{dep.method}</div>
                </td>
                <td style={{ padding: '15px', fontFamily: 'monospace' }}>{dep.utr}</td>
                <td style={{ padding: '15px' }}>{dep.date}</td>
                <td style={{ padding: '15px' }}>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button className="btn-primary" style={{ padding: '8px', width: 'auto', background: 'var(--success)', color: '#000' }} title="Approve">
                      <Check size={16} />
                    </button>
                    <button className="btn-primary" style={{ padding: '8px', width: 'auto', background: 'var(--danger)', color: '#fff' }} title="Reject">
                      <X size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
