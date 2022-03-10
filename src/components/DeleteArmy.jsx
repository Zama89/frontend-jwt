import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import apiService from '../services/api.service';

function DeleteArmy() {
  const [armyDelete, setArmyDelete] = useState({
    name: '',
  });
  const { armyId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    apiService
      .getArmyById(armyId)
      .then(response => {
        setArmyDelete(response.data);
      })
      .catch(err => console.log(err));
  }, []);

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
      <form>
        <label>Name:</label>
        <input type="text" name="name" value={armyDelete.name} />
        <button onClick={deleteArmy}>Delete Army</button>
      </form>
    </div>
  );
}

export default DeleteArmy;
