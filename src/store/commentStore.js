import { atom, selector } from "recoil";

export const commentListStore = atom({
  key: "commentListStore",
  default: [],
});
export const showCommentList = selector({
  key: "showCommentList",
  get: ({ get }) => {
    return get(commentListStore);
  },
});
