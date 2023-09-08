import { TypedUseSelectorHook, useSelector } from 'react-redux';

interface RootReducerState {
  testes: {
    testeLoading: boolean;
    testeData: null;
  };
  loginReducer: {
    login: {
      data: null;
      loading: false;
      error: null;
    };
  };
}

// Extensão do useSelector tipado
export const useAppSelector: TypedUseSelectorHook<RootReducerState> =
  useSelector;
