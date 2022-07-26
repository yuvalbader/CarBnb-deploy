import axios from "axios";

export default class ListApiService {
  static async getList() {
    const response = await axios.get(`http://localhost:8000/api/car`);
    return response.data;
  }
}
