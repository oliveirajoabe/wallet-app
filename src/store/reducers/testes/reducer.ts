import { produce } from 'immer';
import { Action } from 'redux';

import { get } from './reducerCases';

interface RootReducerState {
  testes: {
    testeLoading: boolean;
    testeData: null;
  };
}

const INITIAL_STATE = {
  testeLoading: false,
  testeData: null,
};

const reducerCases = {
  ...get,
};

const testes = (state = INITIAL_STATE, action: Action) =>
  produce(state, (draft) => {
    const reducer = Object.keys(reducerCases).find((item) => {
      return item === action.type;
    });

    const props = { state, draft, action } as {
      state: any;
      draft: RootReducerState;
      action: any;
    };

    if (reducer?.length) {
      reducerCases[reducer](props);
    }
  });

export default testes;
