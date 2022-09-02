export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const PAYMENTDETAILS = "PAYMENTDETAILS";

export const login = (userData) => {
  return {
    type: LOGIN,
    payload: userData,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
