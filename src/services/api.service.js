import axios from 'axios';

class ApiService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_SERVER_URL || 'http://localhost:5005',
    });

    // Automatically set JWT token in the headers for every request
    this.api.interceptors.request.use(config => {
      // Retrieve the JWT token from the local storage
      const storedToken = localStorage.getItem('authToken');

      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }

      return config;
    });
  }

  login = requestBody => {
    return this.api.post('/auth/login', requestBody);
    // same as
    // return axios.post("http://localhost:5005/auth/login");
  };

  signup = requestBody => {
    return this.api.post('/auth/signup', requestBody);
    // same as
    // return axios.post("http://localhost:5005/auth/singup");
  };

  verify = () => {
    return this.api.get('/auth/verify');
    // same as
    // return axios.post("http://localhost:5005/auth/verify");
  };

  getArmies = () => {
    return this.api.get('/api/');
  };

  createArmies = body => {
    console.log('creandooo', body);
    return this.api.post('/api/add', body);
  };

  getArmyById = armyId => {
    return this.api.get(`/api/army/${armyId}`);
  };

  editArmy = (armyId, requestBody) => {
    return this.api.post(`/api/army/${armyId}`, requestBody.armyEdit);
  };

  deleteArmy = armyId => {
    return this.api.delete(`/api/army/${armyId}`);
  };

  setFavorite = (favoriteArmies, userId) => {
    console.log(favoriteArmies, 'FWUEIFWFWFIWP');
    return this.api.post(`/user/setfavorite/${userId}`, favoriteArmies);
  };

  userArmies = userId => {
    console.log(userId, 'AL LISTAOOO');
    return this.api.get(`/api/myarmies/${userId}`);
  };

  favoriteArmies = user => {
    console.log(user);
    return this.api.get(`/api/my-favorites`, user);
  };
}

// Create one instance (object) of the service
const apiService = new ApiService();

export default apiService;
