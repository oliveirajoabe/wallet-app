interface LoginData {
  status?: string;
  message?: string;
  id?: string;
  name?: string;
  email?: string;
  username?: string;
  password?: string;
  token?: string;
  is_disabled?: boolean;
  created_at?: string;
  updated_at?: string;
}

interface RootReducerState {
  testes: {
    testeLoading: boolean;
    testeData: null;
  };
  loginReducer: {
    login: {
      data: null | LoginData;
      loading: false;
      error: null;
    };
  };
}
