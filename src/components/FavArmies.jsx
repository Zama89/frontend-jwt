import { useContext } from 'react';
import { AuthContext } from '../context/auth.context';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import apiService from '../services/api.service';

function FavArmies() {
  const [armies, setArmies] = useState([]);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    apiService
      .favoriteArmies(user?._id)
      .then(response => {
        console.log('useEffect', response.data);
        setArmies(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  console.log(armies);

  return (
    <div>
      <h1 className="titulo-principal">My favorites</h1>
      <div className="army-list">
        {armies.length !== 0 &&
          armies.map((army, index) => (
            <Link className="army-row" key={index} to={`/${army._id}`}>
              <h3>{army.name}</h3>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default FavArmies;
