import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import apiService from '../services/api.service';
import EditArmy from '../components/EditArmy';
import DeleteArmy from '../components/DeleteArmy';
import { AuthContext } from '../context/auth.context';
import { useContext } from 'react';
import './detailArmy.css';

function DetailArmy() {
  const [army, setArmy] = useState({});
  const [edit, setEdit] = useState(false);
  const { armyId } = useParams();
  const [isClickedFav, setIsClickedFav] = useState(false);
  const { isLoggedIn, user, setUser } = useContext(AuthContext);

  const cantEdit = !isLoggedIn || army?.owner !== user?._id;

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

  const prevUser = useRef();

  useEffect(() => {
    prevUser.current = user;
  }, [user]);

  const setFavorite = () => {
    let favoriteUserArmy = [...user.favoriteArmies];
    // console.log(favoriteUserArmy, 'QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ', army._id);
    console.log('esto es el prevUser', prevUser);
    console.log('esto es el user', user);
    if (
      (prevUser?.current?.favoriteArmies?.includes(army._id) && !user?.favoriteArmies?.includes(army._id)) ||
      (!prevUser?.current?.favoriteArmies?.includes(army._id) && user?.favoriteArmies?.includes(army._id))
    ) {
      favoriteUserArmy.push(army?._id);
    } else {
      favoriteUserArmy.splice(favoriteUserArmy.indexOf(army._id), 1);
    }

    apiService
      .setFavorite(favoriteUserArmy, user?._id)
      .then(response => {
        setUser(prev => {
          console.log(prev);
          return response.data;
        });
      })
      .catch(err => console.log(err));
    setIsClickedFav(!isClickedFav);
  };

  return (
    <div className="detail-page">
      <h1 className="titulo-principal">Army</h1>
      <div className="form-button">
        <div className="detail-row">
          <button
            className="botones"
            disabled={cantEdit}
            onClick={() => {
              setEdit(!edit);
            }}
          >
            Edit
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
            <p>{army?.owner}</p>
          </div>
        </div>
      )}
      {user?.favoriteArmies?.includes(army?._id) ? (
        <button className="botones" onClick={setFavorite} style={{ background: 'yellow' }}>
          Favorite
        </button>
      ) : (
        <button className="botones" onClick={setFavorite} style={{ background: 'black' }}>
          Favorite
        </button>
      )}
    </div>
  );
}

export default DetailArmy;
