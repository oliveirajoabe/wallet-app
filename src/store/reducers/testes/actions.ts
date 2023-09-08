import { types } from './constants';

export const testeHandle = () => {
  return {
    type: types.get,
    payload: 'testando reducer',
  };
};
