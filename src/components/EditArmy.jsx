import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import apiService from '../services/api.service';
import { AuthContext } from '../context/auth.context';
import { useContext } from 'react';

function EditArmy({ army }) {
  const [armyEdit, setArmyEdit] = useState({
    heroe: '',
    general: '',
    infantry: '',
    artillery: '',
    name: '',
    advice: '',
  });

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const { armyId } = useParams();

  useEffect(() => {
    setArmyEdit(army);
  }, [army]);

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
    armyEdit.owner = user._id;
    apiService
      .editArmy(armyId, { armyEdit })
      .then(response => {
        console.log(response);
        navigate(`/`);
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="edit-view">
      <form onSubmit={handleSubmit} className="inputs-titles">
        <div className="form-item">
          <label>Heroe:</label>
          <select name="heroe" value={armyEdit.heroe} onChange={handleChange}>
            <option value="-">-</option>
            <option value="Thorgrim">Thorgrim</option>
            <option value="Ungrim">Ungrim</option>
          </select>
        </div>
        <div className="form-item">
          <label>General:</label>
          <select name="general" onChange={handleChange} value={armyEdit.general}>
            <option value="-">-</option>
            <option value="Maestro Ingeniero">Maestro Ingeniero</option>
            <option value="Herrero Rúnico">Herrero Rúnico</option>
            <option value="Señor del Clan">Señor del Clan</option>
          </select>
        </div>
        <div className="form-item">
          <label>Infantry:</label>
          <select name="infantry" onChange={handleChange} value={armyEdit.infantry}>
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
          <select name="artillery" onChange={handleChange} value={armyEdit.artillery}>
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
          <input type="text" name="name" onChange={handleChange} value={armyEdit.name} />
        </div>
        <div className="form-item">
          <label>Advice:</label>
          <input type="text" name="advice" onChange={handleChange} value={armyEdit.advice} />
        </div>
        <div className="form-button">
          <button className="btn-action" type="submit">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
              <path
                fillRule="evenodd"
                d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditArmy;
