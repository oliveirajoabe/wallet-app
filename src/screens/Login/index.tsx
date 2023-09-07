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

  const onSubmit = (data) =>
    console.log('Fazer request para autenticar e guardar o token', data);

  return (
    <S.Container>
      <S.WrapperEmail>
        <Input
          textLabel="E-mail:"
          name="email"
          inputMode="email"
          control={control}
          textError={errors.email?.message}
          required
        />
      </S.WrapperEmail>
      <View>
        <Input
          textLabel="Senha:"
          name="password"
          control={control}
          textError={errors.password?.message}
          secureTextEntry
          required
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
