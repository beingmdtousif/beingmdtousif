import { Wallet, Share2, ArrowDownToLine, ArrowUpFromLine, BookOpen, MessageCircle, LogOut, Copy } from 'lucide-react';

export default function Profile({ user, onLogout, onLoginClick }) {
  if (!user) {
    return (
      <div className="flex-center" style={{ height: '100%', flexDirection: 'column', gap: '20px' }}>
        <p className="text-muted">Please login to view your profile</p>
        <button className="btn-primary" style={{ width: 'auto' }} onClick={onLoginClick}>Login</button>
      </div>
    );
  }

  const menuItems = [
    { id: 'refer', icon: <Share2 size={20} />, label: 'Refer & Earn', color: 'var(--primary-accent)' },
    { id: 'deposit', icon: <ArrowDownToLine size={20} />, label: 'Deposit', color: 'var(--success)' },
    { id: 'withdraw', icon: <ArrowUpFromLine size={20} />, label: 'Withdrawal', color: 'var(--danger)' },
    { id: 'guide', icon: <BookOpen size={20} />, label: 'Beginner Guide', color: 'var(--text-main)' },
    { id: 'contact', icon: <MessageCircle size={20} />, label: 'Contact Us', color: '#25D366' },
  ];

  return (
    <div className="profile-container">
      {/* User Info & Wallet */}
      <div className="card glass-panel" style={{ textAlign: 'center', background: 'linear-gradient(135deg, rgba(11, 29, 58, 0.8) 0%, rgba(0, 229, 255, 0.1) 100%)' }}>
        <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--primary-accent)', color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: 'bold', margin: '0 auto 15px' }}>
          {user.name.charAt(0)}
        </div>
        <h2 style={{ marginBottom: '5px' }}>{user.name}</h2>
        <p className="text-muted" style={{ marginBottom: '20px' }}>{user.mobile}</p>

        <div style={{ background: 'rgba(0,0,0,0.3)', padding: '15px', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Wallet className="text-accent" />
            <div style={{ textAlign: 'left' }}>
              <p className="text-muted" style={{ fontSize: '0.8rem' }}>Wallet Balance</p>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>₹5,420.00</h3>
            </div>
          </div>
          <button className="btn-secondary" style={{ padding: '8px 15px', width: 'auto', fontSize: '0.9rem' }}>Refresh</button>
        </div>
      </div>

      {/* Menu List */}
      <div className="card glass-panel" style={{ padding: '10px' }}>
        {menuItems.map(item => (
          <button key={item.id} className="flex-between" style={{ width: '100%', padding: '15px', borderBottom: '1px solid var(--glass-border)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <span style={{ color: item.color }}>{item.icon}</span>
              <span>{item.label}</span>
            </div>
            <span className="text-muted">→</span>
          </button>
        ))}
        <button onClick={onLogout} className="flex-between" style={{ width: '100%', padding: '15px', color: 'var(--danger)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <LogOut size={20} />
            <span>Logout</span>
          </div>
        </button>
      </div>
    </div>
  );
}
