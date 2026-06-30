import { Bell } from 'lucide-react';

export default function Header({ user, onLoginClick }) {
  return (
    <header className="app-header flex-between">
      <div className="logo">SattaGo</div>
      <div className="header-actions">
        {user ? (
          <button className="notification-icon">
            <Bell size={24} />
            <span className="notification-badge">3</span>
          </button>
        ) : (
          <button className="btn-primary" style={{ padding: '8px 16px', width: 'auto' }} onClick={onLoginClick}>
            Login
          </button>
        )}
      </div>
    </header>
  );
}
