import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import apiService from '../services/api.service';

function Home() {
  const [armies, setArmies] = useState([]);

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
      .getArmies()
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
      <h1>Home</h1>
      <Link to={'/add'}>
        <button>Add</button>
      </Link>
      <div>
        {armies.length !== 0 &&
          armies.map((army, index) => (
            <Link key={index} to={`/${army._id}`}>
              <h3>{army.name}</h3>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default Home;
