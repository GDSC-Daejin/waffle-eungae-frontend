import axios from "axios";

export const getCategory = async () => {
  return await axios.get(`https://eung-ae-back.kro.kr/`);
};
export const getPostASC = async () => {
  return await axios.get(`https://eung-ae-back.kro.kr/post?sort=ASC`);
};
export const getPostByCategoryASC = async (categoryId) => {
  return await axios.get(
    `https://eung-ae-back.kro.kr/post/categoryPost/${categoryId}?sort=ASC`
  );
};
