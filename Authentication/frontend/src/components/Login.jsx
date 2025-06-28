import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

const handleSubmit = async e => {
  e.preventDefault();
  console.log('Login form submitted'); // ✅ This should show in browser dev console

  try {
    const res = await axios.post('http://localhost:5000/api/auth/login', form);
    console.log('Login success', res.data); // ✅ Check API result

    const { token, name } = res.data;
    localStorage.setItem('token', token);
    localStorage.setItem('username', name);
    navigate('/welcome');
  } catch (err) {
    console.error('Login failed:', err);
    alert('Invalid credentials');
  }
};



  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Login</button>
      </form>
      <p>No account? <Link to="/">Signup here</Link></p>
    </div>
  );
};

export default Login;
