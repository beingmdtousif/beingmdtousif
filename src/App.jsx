import { useState } from 'react';
import Layout from './components/layout/Layout';
import Home from './components/main/Home';
import Activity from './components/main/Activity';
import Profile from './components/main/Profile';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState('home'); // 'home', 'activity', 'profile'
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

  return (
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
  );
}

export default App;
