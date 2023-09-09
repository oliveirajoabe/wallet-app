import { types } from './constants';
import { login } from './requests';

export const fetchLogin = ({ email, password }: FetchLogin) => ({
  type: types.loginPost,
  payload: login({ email, password }),
});
