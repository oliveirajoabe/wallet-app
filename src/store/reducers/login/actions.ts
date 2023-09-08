import { types } from './constants';
import { login } from './requests';

export const fetchLogin = ({ email, password }) => ({
  type: types.loginPost,
  payload: login({ email, password }),
});
