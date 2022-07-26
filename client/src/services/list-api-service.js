import axios from "axios";

class ListApiService {
  static async baseGet(url) {
    const userEmail = JSON.parse(localStorage.getItem("user")).email
    return axios.get(url, { userEmail })
  }
  static async basePost(url, body) {
    const userEmail = JSON.parse(localStorage.getItem("user")).email
    return axios.post(url, { ...body, userEmail })
  }
  static async getList() {
    // const response = await ListApiService.baseGet(`http://localhost:8000/api/car`)
    // return response.data
    return ListApiService.baseGet("http://localhost:8000/api/car")
  }

  static async getBrandList() {
    const response = await axios.get("http://localhost:8000/api/car/brands")
    return response.data
  }

}

export default ListApiService
