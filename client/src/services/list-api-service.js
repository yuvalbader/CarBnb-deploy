import axios from 'axios';

export default class ListApiService {
  static async getList() {
    const response = await axios.get(`http://localhost:8000/api/car`);
    return response.data;
  }

  static async addVehicle(vehicle) {
    const response = await axios.post('http://localhost:8000/api/car', vehicle);
    return response.data;
  }
}
