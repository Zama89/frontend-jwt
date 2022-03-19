import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';
import './signup.css';

function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState(undefined);
  const { signup } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleEmail = e => setEmail(e.target.value);
  const handlePassword = e => setPassword(e.target.value);
  const handleName = e => setName(e.target.value);

  const handleSignupSubmit = e => {
    e.preventDefault();
    // Create an object representing the request body
    const requestBody = { email, password, name };

    // Make an axios request to the API
    // If POST request is successful redirect to login page
    // If the request resolves with an error, set the error message in the state``
    signup(requestBody)
      .then(() => {
        navigate('/login');
      })
      .catch(error => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="signup-page">
      <h1 className="titulo-principal">Sign Up</h1>

      <form onSubmit={handleSignupSubmit} className="inputs-titles">
        <div className="form-item">
          <label>Email:</label>
          <input type="email" name="email" value={email} onChange={handleEmail} />
        </div>
        <div className="form-item">
          <label>Password:</label>
          <input type="password" name="password" value={password} onChange={handlePassword} />
        </div>
        <div className="form-item">
          <label>Name:</label>
          <input type="text" name="name" value={name} onChange={handleName} />
        </div>
        <div className="form-button">
          <button className="botones" type="submit">
            Send
          </button>
        </div>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <div className="final-login">
        <p>Already have account?</p>
        <Link to={'/login'}> Login</Link>
      </div>
    </div>
  );
}

export default SignupPage;
