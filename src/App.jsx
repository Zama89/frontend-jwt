import { Route, Routes } from 'react-router-dom';
import IsAnon from './components/IsAnon';
import IsPrivate from './components/IsPrivate';
import Navbar from './components/Navbar';
import { AuthProviderWrapper } from './context/auth.context';
import CreateArmy from './pages/CreateArmy';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import MyArmies from './pages/MyArmies';
import SignupPage from './pages/SignupPage';
import DetailArmy from './pages/DetailArmy';
import FavArmies from './components/FavArmies';
import Units from './pages/Units';

function App() {
  return (
    <AuthProviderWrapper>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/add"
          element={
            <IsPrivate>
              <CreateArmy />
            </IsPrivate>
          }
        />
        <Route exact path="/:armyId" element={<DetailArmy />} />

        <Route
          path="/my-armies"
          element={
            <IsPrivate>
              <MyArmies />
            </IsPrivate>
          }
        />
        <Route
          path="/favorites"
          element={
            <IsPrivate>
              <FavArmies />
            </IsPrivate>
          }
        />
        <Route path="/units" element={<Units />} />
        <Route
          path="/login"
          element={
            <IsAnon>
              <LoginPage />
            </IsAnon>
          }
        />
        <Route
          path="/signup"
          element={
            <IsAnon>
              <SignupPage />
            </IsAnon>
          }
        />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </AuthProviderWrapper>
  );
}

export default App;
