import axios from "axios";

export const getCategory = async () => {
  return await axios.get(`https://eung-ae-back.kro.kr/category`);
};
export const getPostASC = async () => {
  return await axios.get(`https://eung-ae-back.kro.kr?sort=ASC`);
};
export const getPostByCategoryASC = async (categoryId) => {
  return await axios.get(
    `https://eung-ae-back.kro.kr/categoryPost/${categoryId}?sort=ASC`
  );
};
export const getViewCount = async () => {
  return await axios.get(`https://eung-ae-back.kro.kr/viewCount?sort=ASC`);
};
