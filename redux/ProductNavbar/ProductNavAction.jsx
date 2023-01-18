export const MOUNT_NAV = "MOUNT_NAV"
export const UNMOUNT_NAV = "UNMOUNT_NAV"
export const SALESMOUNT_NAV = "SALESMOUNT_NAV"
export const SALESUNMOUNT_NAV = "SALESUNMOUNT_NAV"

export const mountNavbar = () => ({
    type: "MOUNT_NAV",
  });

export const unmountNavbar = () => ({
    type: "UNMOUNT_NAV",
  });



export const salesmountNavbar = () => ({
    type: "SALESMOUNT_NAV",
  });

export const salesunmountNavbar = () => ({
    type: "SALESUNMOUNT_NAV",
  });