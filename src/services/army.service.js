import axios from 'axios';

class ArmyService {
  constructor() {
    this.army = axios.create({
      baseURL: process.env.REACT_APP_SERVER_URL || 'http://localhost:5005',
    });
  }
  getArmies = async () => {
    try {
      const armies = await this.army.get('/army');
      console.log(armies);
      return armies.data;
    } catch (error) {
      console.log(error);
    }
  };
}

const armyService = new ArmyService();

export default armyService;
