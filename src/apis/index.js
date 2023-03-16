import axios from "axios";

export const getCategory = async () => {
  return await axios.get(`http://localhost:8080/`);
};
export const getPostASC = async () => {
  return await axios.get(`http://localhost:8080/`);
};
