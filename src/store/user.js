import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const userStore = atom({
  key: "userStore",
  default: {
    createdDate: "",
    email: "",
    level: null,
    memberId: 0,
    modifiedDate: "",
    name: "",
    role: "",
    roleKey: "",
  },
  effects_UNSTABLE: [persistAtom],
});
export const currentUserStore = selector({
  key: "currentUserStore",
  get: ({ get }) => {
    return get(userStore);
  },
});
