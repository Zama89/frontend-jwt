import apiService from '../services/api.service';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';
import { useContext } from 'react';

function CreateArmy() {
  const [newArmies, setNewArmies] = useState({
    heroe: '',
    general: '',
    infantry: '',
    artillery: '',
    name: '',
    advice: '',
  });

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleEvent = e => {
    setNewArmies(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  console.log(newArmies);

  const handleCreate = e => {
    e.preventDefault();
    newArmies.owner = user._id;
    console.log(newArmies);
    apiService
      .createArmies(newArmies)
      .then(() => {
        navigate('/');
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Create your army</h1>
      <div>
        <form onSubmit={handleCreate}>
          <label>Heroe:</label>
          <input type="text" name="heroe" value={newArmies.heroe} onChange={handleEvent} />

          <label>General:</label>
          <input type="text" name="general" value={newArmies.general} onChange={handleEvent} />

          <label>Infantry:</label>
          <input type="text" name="infantry" value={newArmies.infantry} onChange={handleEvent} />

          <label>Artillery:</label>
          <input type="text" name="artillery" value={newArmies.artillery} onChange={handleEvent} />

          <label>Name:</label>
          <input type="text" name="name" value={newArmies.name} onChange={handleEvent} />

          <label>Advice:</label>
          <input type="text" name="advice" value={newArmies.advice} onChange={handleEvent}></input>

          <button type="submit">Create army</button>
        </form>
      </div>
    </div>
  );
}

export default CreateArmy;
