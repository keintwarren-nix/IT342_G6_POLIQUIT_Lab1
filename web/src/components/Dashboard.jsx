const Dashboard = ({ user, setView, setUser, styles }) => {
    const logout = () => {
        setUser(null);
        setView('login'); 
    };

    return (
        <div style={styles.card}>
            <h2>User Profile</h2>
            <hr />
            <p><strong>Username:</strong> {user?.username}</p>
            <p><strong>Status:</strong> Authenticated</p>
            <button 
                style={{...styles.btnPrimary, backgroundColor: 'red'}} 
                onClick={logout}
            >
                Logout
            </button>
        </div>
    );
};

export default Dashboard; // ADD THIS LINE