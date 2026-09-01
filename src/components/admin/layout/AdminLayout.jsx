import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';

export default function AdminLayout({ children, activeTab, setActiveTab, onSwitchMode }) {
  return (
    <div className="app-container" style={{ maxWidth: '100%', flexDirection: 'row', paddingBottom: 0 }}>
      <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <AdminHeader onSwitchMode={onSwitchMode} />
        <main style={{ flex: 1, padding: '20px', overflowY: 'auto', background: 'var(--primary-dark)' }}>
          {children}
        </main>
      </div>
    </div>
  );
}
