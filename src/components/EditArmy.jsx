import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import apiService from '../services/api.service';

function EditArmy() {
  const [armyEdit, setArmyEdit] = useState({
    name: '',
  });
  const { armyId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    apiService
      .getArmyById(armyId)
      .then(response => {
        setArmyEdit(response.data);
      })
      .catch(err => console.log(err));
  }, []);

  const handleChange = e => {
    setArmyEdit(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    apiService
      .editOneArmy(armyId, { name: armyEdit.name })
      .then(response => {
        console.log(response);
        navigate(`/`);
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={armyEdit.name} onChange={handleChange} />
        <button type="submit">Edit Army</button>
      </form>
    </div>
  );
}

export default EditArmy;
