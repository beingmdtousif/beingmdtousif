import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

export default function Login({ onLogin, onNavigateBack, onNavigateRegister }) {
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mobile, password })
      });
      const data = await response.json();
      if (response.ok) {
        onLogin(data.user);
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Network error. Is the backend running?');
    }
  };

  return (
    <div className="app-container" style={{ justifyContent: 'center' }}>
      <div style={{ position: 'absolute', top: 20, left: 20 }}>
        <button onClick={onNavigateBack} className="text-muted">
          <ArrowLeft size={24} />
        </button>
      </div>

      <div className="card glass-panel" style={{ margin: '20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h2 className="text-accent" style={{ fontSize: '2rem', marginBottom: '10px' }}>Welcome Back</h2>
          <p className="text-muted">Sign in to continue to SattaGo</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Mobile Number</label>
            <input
              type="tel"
              className="input-field"
              placeholder="Enter mobile number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              className="input-field"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div style={{ textAlign: 'right', marginBottom: '20px' }}>
            <a href="#" className="text-muted" style={{ fontSize: '0.9rem' }}>Forgot Password?</a>
          </div>

          <button type="submit" className="btn-primary" style={{ marginBottom: '15px' }}>
            Login
          </button>

          <div style={{ textAlign: 'center' }}>
            <span className="text-muted">Don't have an account? </span>
            <button type="button" className="text-accent" onClick={onNavigateRegister}>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
