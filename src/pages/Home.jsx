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
      <Link to={'/:armyId/edit'}>
        <button>Edit</button>
      </Link>
      <div>
        {JSON.stringify(armies)}
        {/* {armies.length !== 0 &&
          armies.map((army, index) => {
            return <h3 key={index}>{army.name}</h3>;
          })} */}
      </div>
    </div>
  );
}

export default Home;
