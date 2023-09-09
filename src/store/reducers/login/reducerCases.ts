import { types } from './constants';

const index = {
  pending: `${types.loginPost}_PENDING`,
  fulfilled: `${types.loginPost}_FULFILLED`,
  rejected: `${types.loginPost}_REJECTED`,
};

export const login = {
  [index.pending]: ({ draft }) => {
    draft.login.loading = true;
  },
  [index.fulfilled]: ({ draft, action }) => {
    draft.login.data = action.payload;

    draft.login.loading = false;
    draft.login.error = null;
  },
  [index.rejected]: ({ draft, action }) => {
    draft.login.loading = false;
    draft.login.error = action.payload;
  },
};
