import { types } from './constants';
import { login, logout } from './requests';

export const fetchLogin = ({ email, password, onSuccess }: FetchLogin) => ({
  type: types.loginPost,
  payload: login({ email, password }),
  onSuccess,
});

export const fetchLogout = ({ userId, accessToken, onSuccess }) => ({
  type: types.logoutPatch,
  payload: logout({ userId, accessToken }),
  onSuccess,
});
