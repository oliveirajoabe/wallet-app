import React, { useCallback, useMemo, useState } from 'react';
import * as S from './styles';
import { InputProps } from './input';
import { useController } from 'react-hook-form';
import { TouchableOpacity, View } from 'react-native';
import { Eye, EyeClosed } from 'phosphor-react-native';

import { defaultTheme } from '../../theme/default';

export default function Input({
  placeholder,
  secureTextEntry = false,
  inputMode,
  control,
  name,
  textError,
  required = false,
  textLabel,
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const { field } = useController({
    control,
    defaultValue: '',
    name,
  });

  const handleShowPassword = useCallback(() => setShowPassword(true), []);
  const handleDontShowPassword = useCallback(() => setShowPassword(false), []);

  const showInputPassword = useMemo(() => {
    return !!showPassword && !!secureTextEntry;
  }, [showPassword, secureTextEntry]);

  return (
    <View>
      <S.CustomText>
        {required && <S.TextRequired>*</S.TextRequired>}
        {textLabel}
      </S.CustomText>
      <View>
        <S.Input
          value={field.value}
          onChangeText={field.onChange}
          secureTextEntry={showInputPassword ? false : secureTextEntry}
          placeholder={placeholder}
          inputMode={inputMode}
          hasError={!!textError}
        />

        <S.WrapperIcon>
          {showPassword === false && secureTextEntry && (
            <TouchableOpacity onPress={handleShowPassword}>
              <Eye size={32} color={defaultTheme.colors.gray1} />
            </TouchableOpacity>
          )}

          {showPassword && (
            <TouchableOpacity onPress={handleDontShowPassword}>
              <EyeClosed size={32} color={defaultTheme.colors.gray1} />
            </TouchableOpacity>
          )}
        </S.WrapperIcon>
      </View>
      <S.TextError>{textError}</S.TextError>
    </View>
  );
}
