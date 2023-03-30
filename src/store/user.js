import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const userStore = atom({
  key: "userStore",
  default: {
    memberId: 0,
    email: null,
    name: "",
    level: 0,
  },
  effects_UNSTABLE: [persistAtom],
});
export const currentUserStore = selector({
  key: "currentUserStore",
  get: ({ get }) => {
    return get(userStore);
  },
});
