import { useContext } from 'react';
import { AuthContext } from '../context/auth.context';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import apiService from '../services/api.service';

function MyArmies() {
  const [armies, setArmies] = useState([]);

  const { user } = useContext(AuthContext);

  /*useEffect(() => {
    const fetchArmies = async () => {
      return await apiService.getArmies();
    };
    const { response } = fetchArmies();
    setArmies(response);
    console.log(response);
  }, []);*/

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
  }, []);
  console.log(armies);

  return (
    <div>
      <h1 className="titulo-principal">My armies</h1>
      <Link to={'/add'}>
        <button>Add</button>
      </Link>
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

export default MyArmies;
