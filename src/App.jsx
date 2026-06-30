import { useState } from 'react';
import Layout from './components/layout/Layout';
import Home from './components/main/Home';
import Activity from './components/main/Activity';
import Profile from './components/main/Profile';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

// Admin Imports
import AdminLayout from './components/admin/layout/AdminLayout';
import AdminDashboard from './components/admin/views/AdminDashboard';
import AdminDeposits from './components/admin/views/AdminDeposits';
import AdminWithdrawals from './components/admin/views/AdminWithdrawals';
import AdminLottery from './components/admin/views/AdminLottery';
import AdminSettings from './components/admin/views/AdminSettings';

import './App.css';

function App() {
  const [appMode, setAppMode] = useState('user'); // 'user', 'admin'
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState('home'); // 'home', 'activity', 'profile'
  const [adminTab, setAdminTab] = useState('dashboard');
  const [authView, setAuthView] = useState(null); // 'login', 'register', null

  const handleLogin = (userData) => {
    setUser(userData);
    setAuthView(null);
  };

  const handleLogout = () => {
    setUser(null);
    setActiveTab('home');
  };

  if (authView === 'login') {
    return (
      <Login
        onLogin={handleLogin}
        onNavigateBack={() => setAuthView(null)}
        onNavigateRegister={() => setAuthView('register')}
      />
    );
  }

  if (authView === 'register') {
    return (
      <Register
        onRegister={handleLogin}
        onNavigateBack={() => setAuthView(null)}
        onNavigateLogin={() => setAuthView('login')}
      />
    );
  }

  if (appMode === 'admin') {
    return (
      <AdminLayout
        activeTab={adminTab}
        setActiveTab={setAdminTab}
        onSwitchMode={() => setAppMode('user')}
      >
        {adminTab === 'dashboard' && <AdminDashboard />}
        {adminTab === 'deposits' && <AdminDeposits />}
        {adminTab === 'withdrawals' && <AdminWithdrawals />}
        {adminTab === 'lottery' && <AdminLottery />}
        {adminTab === 'settings' && <AdminSettings />}
      </AdminLayout>
    );
  }

  return (
    <div style={{ position: 'relative', height: '100%' }}>
      {/* Dev Only: Admin Toggle */}
      <button
        onClick={() => setAppMode('admin')}
        style={{ position: 'absolute', top: 15, left: '50%', transform: 'translateX(-50%)', zIndex: 100, background: 'var(--success)', color: '#000', padding: '5px 10px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold' }}
      >
        Admin Mode
      </button>

      <Layout
        user={user}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onLoginClick={() => setAuthView('login')}
      >
        {activeTab === 'home' && <Home user={user} />}
        {activeTab === 'activity' && <Activity user={user} onLoginClick={() => setAuthView('login')} />}
        {activeTab === 'profile' && <Profile user={user} onLogout={handleLogout} onLoginClick={() => setAuthView('login')} />}
      </Layout>
    </div>
  );
}

export default App;
