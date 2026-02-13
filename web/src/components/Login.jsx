import { useState } from 'react';
import axios from 'axios';

const Login = ({ setView, setUser, styles }) => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post("http://localhost:8080/api/users/login", formData);
      setUser(resp.data);
      setView('dashboard');
    } catch (err) { setError("Invalid credentials"); }
  };

  return (
    <div style={styles.card}>
      <h1 style={styles.title}>Welcome Back</h1>
      {error && <p style={{color: 'red'}}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input style={styles.input} placeholder="Username" onChange={e => setFormData({...formData, username: e.target.value})} required />
        <input style={styles.input} type="password" placeholder="Password" onChange={e => setFormData({...formData, password: e.target.value})} required />
        <button style={styles.btnPrimary} type="submit">Log In</button>
      </form>
      <button style={styles.btnSecondary} onClick={() => setView('register')}>Create New Account</button>
    </div>
  );
};
export default Login;