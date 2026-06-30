import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

export default function Register({ onNavigateBack, onNavigateLogin }) {
  const [formData, setFormData] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    const ref = params.get('ref') || '';
    return {
      name: '',
      mobile: '',
      password: '',
      confirmPassword: '',
      referralCode: ref
    };
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          mobile: formData.mobile,
          password: formData.password,
          referralCode: formData.referralCode
        })
      });
      const data = await response.json();
      if (response.ok) {
        alert('Registration successful! Please login.');
        onNavigateLogin();
      } else {
        alert(data.message || 'Registration failed');
      }
    } catch (error) {
      console.error('Registration error:', error);
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
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <h2 className="text-accent" style={{ fontSize: '2rem', marginBottom: '10px' }}>Create Account</h2>
          <p className="text-muted">Join SattaGo today</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              className="input-field"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Mobile Number</label>
            <input
              type="tel"
              name="mobile"
              className="input-field"
              placeholder="Enter mobile number"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="input-field"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              className="input-field"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Referral Code (Required)</label>
            <input
              type="text"
              name="referralCode"
              className="input-field"
              placeholder="Enter referral code"
              value={formData.referralCode}
              onChange={handleChange}
              required
              readOnly={!!new URLSearchParams(window.location.search).get('ref')}
            />
          </div>

          <button type="submit" className="btn-primary" style={{ marginTop: '10px', marginBottom: '15px' }}>
            Sign Up
          </button>

          <div style={{ textAlign: 'center' }}>
            <span className="text-muted">Already have an account? </span>
            <button type="button" className="text-accent" onClick={onNavigateLogin}>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
