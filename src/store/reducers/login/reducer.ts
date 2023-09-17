import { produce } from 'immer';
import { Action } from 'redux';

import reducers from './reducerCases';

import initialState from './initialState';

const INITIAL_STATE = {
  ...initialState,
};

const reducerCases = {
  ...reducers,
};

const loginReducer = (state = INITIAL_STATE, action: Action) =>
  produce(state, (draft) => {
    const reducer = Object.keys(reducerCases).find((item) => {
      return item === action.type;
    });

    const props = { state, draft, action } as {
      state: any;
      draft: any;
      action: any;
    };

    if (reducer?.length) {
      reducerCases[reducer](props);
    }
  });

export default loginReducer;
