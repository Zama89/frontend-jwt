import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import apiService from '../services/api.service';
import EditArmy from '../components/EditArmy';
import DeleteArmy from '../components/DeleteArmy';
import { AuthContext } from '../context/auth.context';
import { useContext } from 'react';
import logo from '../images/dwarf-icon4.webp';
import './detailArmy.css';

function DetailArmy() {
  const [army, setArmy] = useState({});
  const [edit, setEdit] = useState(false);
  const { armyId } = useParams();
  const { isLoggedIn, user } = useContext(AuthContext);

  const cantEdit = !isLoggedIn || army?.owner?._id !== user?._id;

  useEffect(() => {
    console.log(armyId);
    apiService
      .getArmyById(armyId.toString())
      .then(response => {
        console.log(response);
        setArmy(response.data);
      })
      .catch(err => console.log(err));
  }, [armyId]);

  const prevUser = useRef();

  useEffect(() => {
    prevUser.current = user;
  }, [user]);

  return (
    <div className="detail-page">
      <div className="titulo-principal">
        <div className="logo-controller">
          <img width="50px" src={logo}></img>
          <h1>Armies</h1>
          <img width="50px" src={logo}></img>
        </div>
      </div>

      <div className="form-button">
        <div className="detail-row">
          <button
            className="btn-action"
            disabled={cantEdit}
            onClick={() => {
              setEdit(oldValue => !oldValue);
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
            </svg>
          </button>
        </div>
        <DeleteArmy disabled={cantEdit} />
      </div>
      {edit ? (
        <EditArmy army={army} />
      ) : (
        <div className="detail-army">
          <div className="detail-row">
            <p>Heroe:</p>
            <p>{army?.heroe}</p>
          </div>
          <div className="detail-row">
            <p>General:</p>
            <p>{army?.general}</p>
          </div>
          <div className="detail-row">
            <p>Infantry:</p>
            <p>{army?.infantry}</p>
          </div>
          <div className="detail-row">
            <p>Artillery:</p>
            <p>{army?.artillery}</p>
          </div>
          <div className="detail-row">
            <p>Name:</p>
            <p>{army?.name}</p>
          </div>
          <div className="detail-row">
            <p>Advice:</p>
            <p>{army?.advice}</p>
          </div>
          <div className="detail-row">
            <p>Owner:</p>
            <p>{army?.owner?.username}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default DetailArmy;
