import { atom, selector } from "recoil";

export const categoryIdStore = atom({
  key: "categoryIdStore",
  default: 1,
});
export const currentCategoryIdStore = selector({
  key: "currentCategoryIdStore",
  get: ({ get }) => {
    return get(categoryIdStore);
  },
});
