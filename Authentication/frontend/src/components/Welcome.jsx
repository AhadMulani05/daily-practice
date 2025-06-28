import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const name = localStorage.getItem('username');
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <div className="welcome-container">
      <h1>Welcome, {name} 👋</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Welcome;
