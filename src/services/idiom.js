import axios from "axios";

const baseUrl = "http://localhost:8000";

const getCollection = () => {
  const request = axios.get(`${baseUrl}/groups`);
  return request.then((res) => res.data);
};

const getColors = () => {
  const request = axios.get(`${baseUrl}/colors`);
  return request.then((res)=> res.data)
}

const idiomServices = { getCollection, getColors };

export default idiomServices;
