import { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';

function App() {
  const [view, setView] = useState('login');
  const [user, setUser] = useState(null);

  const styles = {
    card: { padding: '2rem', border: '1px solid #ccc', borderRadius: '8px', maxWidth: '400px', margin: '2rem auto' },
    input: { display: 'block', width: '100%', marginBottom: '10px', padding: '8px' },
    btnPrimary: { backgroundColor: '#007bff', color: 'white', padding: '10px', width: '100%', border: 'none', cursor: 'pointer' },
    btnSecondary: { backgroundColor: 'transparent', border: 'none', color: '#007bff', marginTop: '10px', cursor: 'pointer' }
  };

  return (
    <div>
      {view === 'login' && <Login setView={setView} setUser={setUser} styles={styles} />}
      {view === 'register' && <Register setView={setView} styles={styles} />}
      {view === 'dashboard' && <Dashboard user={user} setUser={setUser} setView={setView} styles={styles} />}
    </div>
  );
}

export default App;