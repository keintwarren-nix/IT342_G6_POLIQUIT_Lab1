import { useState } from 'react';
import axios from 'axios';

const Register = ({ setView, styles }) => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/users/register", formData);
      alert("Success! Please log in.");
      setView('login');
    } catch (err) { alert("Registration failed"); }
  };

  return (
    <div style={styles.card}>
      <h1 style={styles.title}>Join Us</h1>
      <form onSubmit={handleSubmit}>
        <input style={styles.input} placeholder="Username" onChange={e => setFormData({...formData, username: e.target.value})} required />
        <input style={styles.input} type="email" placeholder="Email" onChange={e => setFormData({...formData, email: e.target.value})} required />
        <input style={styles.input} type="password" placeholder="Password" onChange={e => setFormData({...formData, password: e.target.value})} required />
        <button style={styles.btnPrimary} type="submit">Sign Up</button>
      </form>
      <button style={styles.btnSecondary} onClick={() => setView('login')}>Already have an account?</button>
    </div>
  );
};
export default Register;