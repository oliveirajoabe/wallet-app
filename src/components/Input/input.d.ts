import { InputModeOptions } from 'react-native';

interface InputProps {
  placeholder?: string;
  secureTextEntry?: boolean;
  inputMode?: InputModeOptions;
  control: Record<unknown>;
  name: string;
  textError?: string;
}
