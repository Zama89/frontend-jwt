import { useContext } from 'react';
import { AuthContext } from '../context/auth.context';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import apiService from '../services/api.service';
import logo from '../images/dwarf-icon4.webp';
import logo2 from '../images/banner2.webp';
import '../index.css';

function MyArmies() {
  const [armies, setArmies] = useState([]);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    apiService
      .userArmies(user?._id)
      .then(response => {
        console.log('useEffect', response.data);
        setArmies(response.data);
      })
      .catch(error => {
        console.log(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(armies);

  return (
    <div>
      <div className="titulo-principal">
        <div className="logo-controller">
          <img width="50px" src={logo}></img>
          <h1>My armies</h1>
          <img width="50px" src={logo}></img>
        </div>
      </div>

      <div className="add-container">
        <Link to={'/add'}>
          <button className="btn-action">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </Link>
      </div>
      <div className="army-list">
        {armies.length !== 0 &&
          armies.map((army, index) => (
            <Link className="army-row" key={index} to={`/${army._id}`}>
              <div className="logo-include">
                <img src={logo2}></img>
                <h3>{army.name}</h3>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default MyArmies;
