const Dashboard = ({ user, styles }) => (
  <div>
    <h1 style={styles.title}>Dashboard</h1>
    <div style={{...styles.card, maxWidth: 'none', marginTop: '20px'}}>
      <h3>Hello, {user.username}!</h3>
      <p>Welcome to your workspace.</p>
    </div>
  </div>
);
export default Dashboard;