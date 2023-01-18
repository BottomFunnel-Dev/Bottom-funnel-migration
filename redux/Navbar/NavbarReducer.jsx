import { CHANGE_COLOR } from "./NavbarAction";

const initialStore = {
  color: "white",
  logo: true,
};

export const NavbarReducer = (store = initialStore, { type, payload }) => {
  switch (type) {
    case CHANGE_COLOR:
      return {
        color: payload.color,
       logo: payload.logo
      };

    default:
      return store;
  }
};
