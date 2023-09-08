import { Reducer } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * account => dados da conta
 */

export default (reducers: Reducer) => {
  const persistConfig = {
    key: 'wallet',
    storage: AsyncStorage,
    whitelist: ['loginReducer'],
  };

  const persistedReducer = persistReducer(persistConfig, reducers);

  return persistedReducer;
};
