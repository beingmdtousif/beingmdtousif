import { Home, Activity, User } from 'lucide-react';

export default function Footer({ activeTab, setActiveTab }) {
  return (
    <footer className="app-footer">
      <button
        className={`nav-item ${activeTab === 'home' ? 'active' : ''}`}
        onClick={() => setActiveTab('home')}
      >
        <Home />
        <span>Home</span>
      </button>
      <button
        className={`nav-item ${activeTab === 'activity' ? 'active' : ''}`}
        onClick={() => setActiveTab('activity')}
      >
        <Activity />
        <span>Activity</span>
      </button>
      <button
        className={`nav-item ${activeTab === 'profile' ? 'active' : ''}`}
        onClick={() => setActiveTab('profile')}
      >
        <User />
        <span>Profile</span>
      </button>
    </footer>
  );
}
