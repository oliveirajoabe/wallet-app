import { applyMiddleware, compose, createStore } from 'redux';
import persistedReducer from './persistReducer';
import rootReducer from '../reducers';
import { persistStore } from 'redux-persist';
import reduxPromiseMiddleware from '../middlewares/redux-promise-middleware';

const middlewares = [reduxPromiseMiddleware].filter(Boolean);

const finalCreateStore = compose(applyMiddleware(...middlewares));

const store = createStore(persistedReducer(rootReducer), finalCreateStore);

export const persistor = persistStore(store);

export default store;
