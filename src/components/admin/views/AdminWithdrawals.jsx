import { Check, X } from 'lucide-react';

export default function AdminWithdrawals() {
  const withdrawals = [
    { id: 'WIT001', user: 'User 789', method: 'Bank Transfer', amount: '₹2,500', details: 'Acc: 123456789, IFSC: SBIN0001234', status: 'Pending', date: 'Oct 24, 11:20 AM' },
    { id: 'WIT002', user: 'User 101', method: 'UPI', amount: '₹1,000', details: 'UPI: user@ybl', status: 'Pending', date: 'Oct 24, 11:45 AM' },
  ];

  return (
    <div>
      <h2 className="text-success" style={{ marginBottom: '20px' }}>Withdrawal Requests</h2>

      <div className="card glass-panel" style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--glass-border)', color: 'var(--text-muted)' }}>
              <th style={{ padding: '15px' }}>ID</th>
              <th style={{ padding: '15px' }}>User</th>
              <th style={{ padding: '15px' }}>Amount</th>
              <th style={{ padding: '15px' }}>Method Details</th>
              <th style={{ padding: '15px' }}>Date</th>
              <th style={{ padding: '15px' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {withdrawals.map(wit => (
              <tr key={wit.id} style={{ borderBottom: '1px solid var(--glass-border)' }}>
                <td style={{ padding: '15px' }}>{wit.id}</td>
                <td style={{ padding: '15px' }}>{wit.user}</td>
                <td style={{ padding: '15px', fontWeight: 'bold' }}>{wit.amount}</td>
                <td style={{ padding: '15px' }}>
                  <div style={{ fontSize: '0.9rem' }}>{wit.method}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{wit.details}</div>
                </td>
                <td style={{ padding: '15px' }}>{wit.date}</td>
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
