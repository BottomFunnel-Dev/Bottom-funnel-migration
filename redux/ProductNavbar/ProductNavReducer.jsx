import {
  MOUNT_NAV,
  UNMOUNT_NAV,
  SALESMOUNT_NAV,
  SALESUNMOUNT_NAV,
} from "./ProductNavAction";

const initialStore = {
  navMount: false,
  salesnavMount: false,
};

export default function mountNavbarReducer(
  store = initialStore,
  { type, payload },
) {
  switch (type) {
    case MOUNT_NAV:
      return {
        navMount: true,
      };
    case UNMOUNT_NAV:
      return {
        navMount: false,
      };
    case SALESMOUNT_NAV:
      return {
        salesnavMount: true,
      };
    case SALESUNMOUNT_NAV:
      return {
        salesnavMount: false,
      };

    default:
      return store;
  }
}
