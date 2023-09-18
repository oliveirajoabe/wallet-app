import { types } from '../constants';

const index = {
  pending: `${types.logoutPatch}_PENDING`,
  fulfilled: `${types.logoutPatch}_FULFILLED`,
  rejected: `${types.logoutPatch}_REJECTED`,
};

export const logout = {
  [index.pending]: ({ draft }) => {
    draft.login.loading = true;
  },
  [index.fulfilled]: ({ draft, action }) => {
    draft.login.data = null;

    draft.login.loading = false;
    draft.login.error = null;
  },
  [index.rejected]: ({ draft, action }) => {
    draft.login.loading = false;
    draft.login.error = action.payload;
  },
};
