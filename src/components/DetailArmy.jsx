import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import apiService from '../services/api.service';

function DetailArmy() {
  const [army, setArmy] = useState({
    name: '',
  });
  const { armyId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    apiService
      .getArmyById(armyId)
      .then(response => {
        setArmy(response.data);
      })
      .catch(err => console.log(err));
  }, []);

  const handleChange = e => {
    setArmy(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    apiService
      .editOneArmy(armyId, { name: army.name })
      .then(response => {
        console.log(response);
        navigate('/');
      })
      .catch(err => console.log(err));
  };

  const deleteArmy = () => {
    apiService
      .deleteArmy(armyId)
      .then(() => {
        navigate('/');
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={army.name} onChange={handleChange} />
        <button type="submit">Edit Army</button>
        <button onClick={deleteArmy}>Delete Army</button>
      </form>
    </div>
  );
}

export default DetailArmy;
