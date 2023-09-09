import { Action, combineReducers } from 'redux';

import testes from './store/reducers/testes/reducer';
import loginReducer from './store/reducers/login/reducer';

const appReducer = combineReducers({
  testes,
  loginReducer,
});

const rootReducer = (state: RootReducerState, action: Action) => {
  return appReducer(state, action);
};

export default rootReducer;
