export default function AdminHeader({ onSwitchMode }) {
  return (
    <header className="app-header flex-between" style={{ background: '#061124', borderBottom: '1px solid #12284C' }}>
      <div className="logo text-success">SattaGo Admin</div>
      <button className="btn-secondary" style={{ padding: '8px 15px', width: 'auto', fontSize: '0.8rem' }} onClick={onSwitchMode}>
        Switch to User Panel
      </button>
    </header>
  );
}
