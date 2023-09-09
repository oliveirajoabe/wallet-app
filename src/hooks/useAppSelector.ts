import { TypedUseSelectorHook, useSelector } from 'react-redux';

// Extensão do useSelector tipado
export const useAppSelector: TypedUseSelectorHook<RootReducerState> =
  useSelector;
