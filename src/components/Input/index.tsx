import React from 'react';
import * as S from './styles';
import { InputProps } from './input';
import { useController } from 'react-hook-form';
import { View } from 'react-native';

export default function Input({
  placeholder,
  secureTextEntry = false,
  inputMode,
  control,
  name,
  textError,
}: InputProps) {
  const { field } = useController({
    control,
    defaultValue: '',
    name,
  });

  return (
    <View>
      <S.Input
        value={field.value}
        onChangeText={field.onChange}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        inputMode={inputMode}
        hasError={!!textError}
      />
      <S.TextError>{textError}</S.TextError>
    </View>
  );
}
