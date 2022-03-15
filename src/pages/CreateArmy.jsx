import apiService from '../services/api.service';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';
import { useContext } from 'react';
import './createArmy.css';

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
  const isFormFilled =
    newArmies.heroe === '' ||
    newArmies.general === '' ||
    newArmies.infantry === '' ||
    newArmies.artillery === '' ||
    newArmies.name === '' ||
    newArmies.advice === '';

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
    <div className="create-page">
      <h1 className="titulo-principal">Create your army</h1>
      <div>
        <form onSubmit={handleCreate} className="inputs-titles">
          <div className="form-item">
            <label>Heroe:</label>
            <select name="heroe" onChange={handleEvent}>
              <option value="-">-</option>
              <option value="Thorgrim">Thorgrim</option>
              <option value="Ungrim">Ungrim</option>
            </select>
          </div>
          <div className="form-item">
            <label>General:</label>
            <select name="general" onChange={handleEvent}>
              <option value="-">-</option>
              <option value="Maestro Ingeniero">Maestro Ingeniero</option>
              <option value="Herrero Rúnico">Herrero Rúnico</option>
              <option value="Señor del Clan">Señor del Clan</option>
            </select>
          </div>
          <div className="form-item">
            <label>Infantry:</label>
            <select name="infantry" onChange={handleEvent}>
              <option value="-">-</option>
              <option value="Guerreros Enanos">Guerreros Enanos</option>
              <option value="Rompehierros">Rompehierros</option>
              <option value="Barbaslargas">Barbaslargas</option>
              <option value="Matadores">Matadores</option>
              <option value="Ballesteros">Ballesteros</option>
              <option value="Mineros">Mineros</option>
              <option value="Atronadores">Atronadores</option>
              <option value="Dracohierros">Dracohierros</option>
            </select>
          </div>
          <div className="form-item">
            <label>Artillery:</label>
            <select name="artillery" onChange={handleEvent}>
              <option value="-">-</option>
              <option value="Lanzaagravios">Lanzaagravios</option>
              <option value="Cañón">Cañón</option>
              <option value="Cañón órgano">Cañón órgano</option>
              <option value="Lanzallamas">Lanzallamas</option>
              <option value="Girocóptero">Girocóptero</option>
              <option value="Girocóptero bombardero">Girocóptero bombardero</option>
            </select>
          </div>
          <div className="form-item">
            <label>Name:</label>
            <input type="text" name="name" value={newArmies.name} onChange={handleEvent} />
          </div>
          <div className="form-item">
            <label>Advice:</label>
            <input type="text" name="advice" value={newArmies.advice} onChange={handleEvent}></input>
          </div>
          <div className="form-button">
            <button className="botones" type="submit" disabled={isFormFilled}>
              Create army
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateArmy;
