import { atom, selector } from "recoil";

export const categoryId = atom({
  key: "categoryId",
  default: 0,
});
export const currentCategoryId = selector({
  key: "currentCategoryId",
  get: ({ get }) => {
    return get(categoryId);
  },
});
