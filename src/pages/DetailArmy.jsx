import { useEffect, useState, useRef } from 'react';
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
      {JSON.stringify(user)}
      {JSON.stringify(prevUser)}
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
        <div className="detail-view">
          <p>
            <span>Heroe:</span>
            <span>{army?.heroe}</span>
          </p>
          <p>
            <span>General:</span>
            <span>{army?.general}</span>
          </p>
          <p>
            <span>Infantry:</span>
            <span>{army?.infantry}</span>
          </p>
          <p>
            <span>Artillery:</span>
            <span>{army?.artillery}</span>
          </p>
          <p>
            <span>Name:</span>
            <span>{army?.name}</span>
          </p>
          <p>
            <span>Advice:</span>
            <span>{army?.advice}</span>
          </p>
          <p>
            <span>Owner:</span>
            <span>{army?.owner}</span>
          </p>
        </div>
      )}
      {user?.favoriteArmies?.includes(army?._id) ? (
        <button onClick={setFavorite} style={{ background: 'yellow' }}>
          Favorite
        </button>
      ) : (
        <button onClick={setFavorite} style={{ background: 'black' }}>
          Favorite
        </button>
      )}
    </div>
  );
}

export default DetailArmy;
