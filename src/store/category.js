import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const categoryIdStore = atom({
  key: "categoryIdStore",
  default: 1,
  effects_UNSTABLE: [persistAtom],
});
export const currentCategoryIdStore = selector({
  key: "currentCategoryIdStore",
  get: ({ get }) => {
    return get(categoryIdStore);
  },
});
