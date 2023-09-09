import { TypedUseSelectorHook, useSelector } from 'react-redux';

<<<<<<< HEAD
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

=======
>>>>>>> b12903b30d33706ff1f877eabf2106b359012df8
// Extensão do useSelector tipado
export const useAppSelector: TypedUseSelectorHook<RootReducerState> =
  useSelector;
