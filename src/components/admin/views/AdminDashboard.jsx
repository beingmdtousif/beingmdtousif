export default function AdminDashboard() {
  const stats = [
    { id: 1, label: 'Total Users', value: '1,245', color: 'var(--primary-accent)' },
    { id: 2, label: 'Pending Deposits', value: '12', color: 'var(--warning, #FFC107)' },
    { id: 3, label: 'Pending Withdrawals', value: '5', color: 'var(--danger)' },
    { id: 4, label: 'Total Bets Today', value: '₹45,200', color: 'var(--success)' },
  ];

  return (
    <div>
      <h2 className="text-success" style={{ marginBottom: '20px' }}>Dashboard Overview</h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
        {stats.map(stat => (
          <div key={stat.id} className="card glass-panel" style={{ padding: '20px', borderLeft: `4px solid ${stat.color}` }}>
            <p className="text-muted" style={{ marginBottom: '10px' }}>{stat.label}</p>
            <h3 style={{ fontSize: '2rem', color: stat.color }}>{stat.value}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
