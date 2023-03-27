import { atom, selector } from "recoil";

export const postLoaderStore = atom({
  key: "postLoaderStore",
  default: true,
});
export const currentPostLoaderStore = selector({
  key: "currentPostLoaderStore",
  get: ({ get }) => {
    return get(postLoaderStore);
  },
});
