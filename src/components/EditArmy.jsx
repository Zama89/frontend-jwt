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
      <form onSubmit={handleSubmit}>
        <label>Heroe:</label>
        <input type="text" name="heroe" value={armyEdit.heroe} onChange={handleChange} />

        <label>General:</label>
        <input type="text" name="general" onChange={handleChange} value={armyEdit.general} />

        <label>Infantry:</label>
        <input type="text" name="infantry" onChange={handleChange} value={armyEdit.infantry} />

        <label>Artillery:</label>
        <input type="text" name="artillery" onChange={handleChange} value={armyEdit.artillery} />

        <label>Name:</label>
        <input type="text" name="name" onChange={handleChange} value={armyEdit.name} />

        <label>Advice:</label>
        <input type="text" name="advice" onChange={handleChange} value={armyEdit.advice} />
        <button type="submit">Edit Army</button>
      </form>
    </div>
  );
}

export default EditArmy;
