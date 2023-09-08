import { types } from './constants';

const index = {
  setPerPage: types.get,
};

export const get = {
  [index.setPerPage]: ({ draft, action }) => {
    console.log('dentro do reducer action', action.payload);

    draft.testeData = action.payload;
  },
};
