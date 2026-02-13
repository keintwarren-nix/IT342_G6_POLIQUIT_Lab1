const Profile = ({ user, styles }) => (
  <div>
    <h1 style={styles.title}>User Profile</h1>
    <div style={{...styles.card, maxWidth: 'none', marginTop: '20px'}}>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email || 'N/A'}</p>
    </div>
  </div>
);
export default Profile;