import axios from "axios";

export const getCategory = async () => {
  return await axios.get(`http://localhost:8080/`);
};
export const getPostASC = async () => {
<<<<<<< HEAD
  return await axios.get(`http://localhost:8080/post?sort=ASC`);
=======
  return await axios.get(`http://localhost:8080/`);
>>>>>>> develop
};
