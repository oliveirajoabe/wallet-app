import React from 'react';

import * as S from './styles';
import Button from '../../components/Button';
import { View } from 'react-native';
import Input from '../../components/Input';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export default function Login() {
  const schema = yup
    .object({
      email: yup.string().required('Campo de e-mail obrigatorio'),
      password: yup.string().required('Campo de senha obrigatorio'),
    })
    .required('Insira valores em todos os campos');

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => console.log('TESTE', data);

  return (
    <S.Container>
      <S.WrapperEmail>
        <S.CustomText>
          <S.TextRequired>*</S.TextRequired>
          E-mail:
        </S.CustomText>
        <Input
          name="email"
          inputMode="email"
          control={control}
          textError={errors.email?.message}
        />
      </S.WrapperEmail>
      <View>
        <S.CustomText>
          <S.TextRequired>*</S.TextRequired>
          Senha:
        </S.CustomText>
        <Input
          name="password"
          secureTextEntry
          control={control}
          textError={errors.password?.message}
        />
      </View>
      <View>
        <S.ButtonLink>
          <S.CustomTextLink>Esqueci a senha</S.CustomTextLink>
        </S.ButtonLink>
        <S.ButtonLink>
          <S.CustomTextLink>Criar conta</S.CustomTextLink>
        </S.ButtonLink>
      </View>

      <S.WrapperButton>
        <Button
          titleButton="Entrar"
          template="success"
          onPress={handleSubmit(onSubmit)}
        />
      </S.WrapperButton>
    </S.Container>
  );
}
