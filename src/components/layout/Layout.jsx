import Header from './Header';
import Footer from './Footer';

export default function Layout({ children, user, activeTab, setActiveTab, onLoginClick }) {
  return (
    <div className="app-container">
      <Header user={user} onLoginClick={onLoginClick} />
      <main className="main-content">
        {children}
      </main>
      <Footer activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
