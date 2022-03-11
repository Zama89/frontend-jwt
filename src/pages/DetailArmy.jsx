import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import apiService from '../services/api.service';
import EditArmy from '../components/EditArmy';
import DeleteArmy from '../components/DeleteArmy';
import { AuthContext } from '../context/auth.context';
import { useContext } from 'react';

function DetailArmy() {
  const [army, setArmy] = useState({});
  const [edit, setEdit] = useState(false);
  const { armyId } = useParams();
  const { isLoggedIn, user } = useContext(AuthContext);
  const cantEdit = !isLoggedIn || army.owner !== user._id;

  useEffect(() => {
    console.log(armyId);
    apiService
      .getArmyById(armyId.toString())
      .then(response => {
        console.log('PROBANDO', response);
        setArmy(response.data);
      })
      .catch(err => console.log(err));
  }, [armyId]);

  return (
    <div>
      <button
        disabled={cantEdit}
        onClick={() => {
          setEdit(!edit);
        }}
      >
        Edit
      </button>
      <DeleteArmy disabled={cantEdit} />
      {edit ? (
        <EditArmy army={army} />
      ) : (
        <div>
          <p>
            <span>Heroe:</span>
            <span>{army.heroe}</span>
          </p>
          <p>
            <span>General:</span>
            <span>{army.general}</span>
          </p>
          <p>
            <span>Infantry:</span>
            <span>{army.infantry}</span>
          </p>
          <p>
            <span>Artillery:</span>
            <span>{army.artillery}</span>
          </p>
          <p>
            <span>Name:</span>
            <span>{army.name}</span>
          </p>
          <p>
            <span>Advice:</span>
            <span>{army.advice}</span>
          </p>
          <p>
            <span>Owner:</span>
            <span>{army.owner}</span>
          </p>
        </div>
      )}
    </div>
  );
}

export default DetailArmy;
