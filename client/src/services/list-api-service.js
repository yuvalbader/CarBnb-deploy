import axios from 'axios';
const BASE_URL = `http://localhost:8000/api/`;
const CAR = `car/`;
const RES = `reservation/`;
const USER = `user/`;
const UTILS = `utils/`;

class ListApiService {
  static async baseGet(url) {
    const userEmail = JSON.parse(localStorage.getItem('user')).email;
    return axios.get(url, { userEmail });
  }
  static async basePost(url, body) {
    const userEmail = JSON.parse(localStorage.getItem('user')).email;
    return axios.post(url, { ...body, userEmail });
  }
  static async getCarsList() {
    try {
      const response = await axios.get(BASE_URL + CAR);
      return response.data;
      // return ListApiService.baseGet("http://localhost:8000/api/car")
    } catch (err) {
      console.log(err.message);
    }
  }

  static async getBrandList() {
    try {
      const response = await axios.get(BASE_URL + CAR + `brands`);
      return response.data;
    } catch (err) {
      console.log(err.message);
    }
  }

  static async addVehicle(vehicle) {
    try {
      const response = await ListApiService.basePost(BASE_URL + CAR, vehicle);
      return response;
    } catch (err) {
      console.log(err.message);
    }
  }
  static async getCar(carId) {
    try {
      const response = await axios.get(BASE_URL + CAR + `${carId}`);
      return response.data;
    } catch (err) {
      console.log(err.message);
    }
  }

  static async getOwnerCars(userId) {
    try {
      const response = await axios.get(BASE_URL + CAR + `user/${userId}`)
      return response.data
    } catch (err) {
      console.log(err.message);
    }
  }

  static async deleteCar(carId) {
    try {
      const response = await axios.delete(BASE_URL + CAR + `${carId}`);
      return response;
    } catch (err) {
      console.log(err.message);
    }
  }

  static async getReservationByCarId(carId) {
    try {
      const response = await axios.get(BASE_URL + RES + `car/${carId}`)
      return response.data
    } catch (err) {
      console.log(err.message);
    }
  }

  static async getReservationByCustomerId(userId) {
    try {
      const response = await axios.get(BASE_URL + RES + `customer/``${userId}`);
      return response.data;
    } catch (err) {
      console.log(err.message);
    }
  }

  static async isCarAvailable(data) {
    try {
      const response = await axios.post(BASE_URL + RES + `available/`, data);
      return response.data; //boolean
    } catch (err) {
      console.log(err.message);
    }
  }

  static async createReservation(reservation) {
    try {
      const response = await axios.post(BASE_URL + RES, reservation);
      return response;
    } catch (err) {
      console.log(err.message);
    }
  }

  static async getUserByEmail(email) {
    try {
      const response = await axios.get(BASE_URL + USER + `email/${email}`)
      return response.data
    } catch (err) {
      console.log(err.message);
    }
  }

  static async getSearchResult(order) {
    console.log(order, 'order');
    try {
      const response = await axios.post(BASE_URL + UTILS, order);
      return response.data;
    } catch (err) {
      console.log(err.message);
    }
  }
}

export default ListApiService;
