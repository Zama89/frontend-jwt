import { useState, useContext } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';
import './login.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const handleEmail = e => setEmail(e.target.value);
  const handlePassword = e => setPassword(e.target.value);

  const handleLoginSubmit = e => {
    e.preventDefault();
    const requestBody = { email, password };

    login(requestBody)
      .then(() => {
        navigate('/');
      })
      .catch(error => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="login-page">
      <h1 className="titulo-principal">Login</h1>

      <form onSubmit={handleLoginSubmit} className="inputs-titles">
        <div className="form-item">
          <label>Email:</label>
          <input type="email" name="email" value={email} onChange={handleEmail} />
        </div>
        <div className="form-item">
          <label>Password:</label>
          <input type="password" name="password" value={password} onChange={handlePassword} />
        </div>
        <div className="form-button">
          <button className="botones" type="submit">
            Login
          </button>
        </div>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <div className="final-login">
        <p>Dont have an account yet?</p>
        <Link to={'/signup'}> Sign Up</Link>
      </div>
    </div>
  );
}

export default LoginPage;
