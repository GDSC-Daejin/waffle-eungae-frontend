import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const userStore = atom({
  key: "userStore",
  default: {
    memberId: null,
    email: null,
    name: null,
    level: null,
  },
  effects_UNSTABLE: [persistAtom],
});
export const currentUserStore = selector({
  key: "currentUserStore",
  get: ({ get }) => {
    return get(userStore);
  },
});
