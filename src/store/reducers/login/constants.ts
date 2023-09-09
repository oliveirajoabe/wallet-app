const prefix = '@login/login';

export const LOGIN = `${prefix}/POST`;
export const LOGOUT = `${prefix}/PATCH`;

export const types = {
  loginPost: LOGIN,
  logoutPatch: LOGOUT,
};
