import { useNavigate, useParams } from 'react-router-dom';
import apiService from '../services/api.service';

function DeleteArmy({ disabled }) {
  const { armyId } = useParams();
  const navigate = useNavigate();

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
      <button className="botones" onClick={deleteArmy} disabled={disabled}>
        Delete Army
      </button>
    </div>
  );
}

export default DeleteArmy;
