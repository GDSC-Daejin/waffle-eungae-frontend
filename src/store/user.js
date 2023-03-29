import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const userStore = atom({
  key: "userStore",
  default: {
    email: "",
    id: {
      createdDate: "",
      email: "",
      level: 0,
      memberId: 0,
      modifiedDate: "",
      name: "",
      role: "",
      roleKey: "",
    },
    level: 0,
    memberId: 0,
    name: "",
  },
  effects_UNSTABLE: [persistAtom],
});
export const currentUserStore = selector({
  key: "currentUserStore",
  get: ({ get }) => {
    return get(userStore);
  },
});
