import { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';

function App() {
  const [view, setView] = useState('login');
  const [user, setUser] = useState(null);

  const styles = {
    body: { backgroundColor: '#f0f2f5', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif' },
    card: { backgroundColor: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', width: '350px' },
    input: { width: '100%', padding: '12px', margin: '8px 0', borderRadius: '6px', border: '1px solid #ddd', boxSizing: 'border-box' },
    btnPrimary: { width: '100%', padding: '12px', backgroundColor: '#0866ff', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' },
    btnSecondary: { width: '100%', padding: '10px', backgroundColor: '#42b72a', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', marginTop: '10px' },
    navItem: { padding: '12px', cursor: 'pointer', borderRadius: '8px', marginBottom: '5px' }
  };

  if (view === 'login' || view === 'register') {
    return (
      <div style={styles.body}>
        {view === 'login' ? <Login setView={setView} setUser={setUser} styles={styles} /> : <Register setView={setView} styles={styles} />}
      </div>
    );
  }

  return (
    <div style={{...styles.body, justifyContent: 'flex-start', alignItems: 'stretch'}}>
      <div style={{width: '250px', backgroundColor: 'white', borderRight: '1px solid #ddd', padding: '20px'}}>
        <h2 style={{color: '#0866ff'}}>Portal</h2>
        <div style={{...styles.navItem, backgroundColor: view === 'dashboard' ? '#f0f2f5' : ''}} onClick={() => setView('dashboard')}>🏠 Dashboard</div>
        <div style={{...styles.navItem, backgroundColor: view === 'profile' ? '#f0f2f5' : ''}} onClick={() => setView('profile')}>👤 Profile</div>
        <div style={{...styles.navItem, color: 'red', marginTop: '20px'}} onClick={() => {setUser(null); setView('login');}}>🚪 Logout</div>
      </div>
      <div style={{flex: 1, padding: '40px'}}>
        {view === 'dashboard' ? <Dashboard user={user} styles={styles} /> : <Profile user={user} styles={styles} />}
      </div>
    </div>
  );
}

export default App;