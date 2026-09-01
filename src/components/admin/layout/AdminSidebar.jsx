import { LayoutDashboard, Wallet, ArrowUpFromLine, Dices, Settings } from 'lucide-react';

export default function AdminSidebar({ activeTab, setActiveTab }) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { id: 'deposits', label: 'Deposits', icon: <Wallet size={20} /> },
    { id: 'withdrawals', label: 'Withdrawals', icon: <ArrowUpFromLine size={20} /> },
    { id: 'lottery', label: 'Lottery Mgmt', icon: <Dices size={20} /> },
    { id: 'settings', label: 'Settings', icon: <Settings size={20} /> },
  ];

  return (
    <div style={{ width: '80px', background: '#061124', borderRight: '1px solid #12284C', display: 'flex', flexDirection: 'column', padding: '20px 0', alignItems: 'center', gap: '20px' }}>
      {navItems.map(item => (
        <button
          key={item.id}
          onClick={() => setActiveTab(item.id)}
          title={item.label}
          style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px',
            color: activeTab === item.id ? 'var(--success)' : 'var(--text-muted)',
            width: '100%'
          }}
        >
          {item.icon}
          <span style={{ fontSize: '0.6rem' }}>{item.label}</span>
        </button>
      ))}
    </div>
  );
}
