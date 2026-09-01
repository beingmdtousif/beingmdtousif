export default function Activity({ user, onLoginClick }) {
  if (!user) {
    return (
      <div className="flex-center" style={{ height: '100%', flexDirection: 'column', gap: '20px' }}>
        <p className="text-muted">Please login to view your activity</p>
        <button className="btn-primary" style={{ width: 'auto' }} onClick={onLoginClick}>Login</button>
      </div>
    );
  }

  const activities = [
    { id: 1, type: 'Bet', option: 'Number 7', amount: 100, status: 'Pending', time: 'Today, 08:00 PM', won: 0 },
    { id: 2, type: 'Bet', option: 'Big', amount: 500, status: 'Completed', time: 'Today, 03:50 PM', won: 1000 },
    { id: 3, type: 'Bet', option: 'Number 2', amount: 50, status: 'Completed', time: 'Yesterday, 08:20 PM', won: 0 },
  ];

  return (
    <div className="activity-container">
      <h2 className="text-accent" style={{ marginBottom: '20px' }}>My Activity</h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {activities.map(act => (
          <div key={act.id} className="card glass-panel" style={{ padding: '15px', marginBottom: 0 }}>
            <div className="flex-between" style={{ marginBottom: '10px' }}>
              <span style={{ fontWeight: 'bold' }}>{act.type} - {act.option}</span>
              <span className={act.status === 'Pending' ? 'text-accent' : (act.won > 0 ? 'text-success' : 'text-danger')} style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>
                {act.status}
              </span>
            </div>

            <div className="flex-between text-muted" style={{ fontSize: '0.9rem' }}>
              <span>Bet: ₹{act.amount}</span>
              {act.status === 'Completed' && (
                <span>{act.won > 0 ? `Won: ₹${act.won}` : 'Lost'}</span>
              )}
            </div>

            <div style={{ marginTop: '10px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              {act.time}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
