import React from 'react';

import * as S from './styles';
import Button from '../../components/Button';
import { View } from 'react-native';
import Input from '../../components/Input';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks/useAppSelector';
import { fetchLogin } from '../../store/reducers/login/actions';

import schema from './validate';

export default function Login() {
  const dispatch = useDispatch();
  const { loginReducer } = useAppSelector((state) => state);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data: DataRequest) => {
    try {
      dispatch(fetchLogin({ ...data }));
    } catch (error) {
      console.error('login error: ', error);
    }
  };

  return (
    <S.Container>
      <S.WrapperEmail>
        <Input
          textLabel="E-mail:"
          name="email"
          inputMode="email"
          control={control}
          textError={errors.email?.message || loginReducer.login.data?.message}
          required
        />
      </S.WrapperEmail>
      <View>
        <Input
          textLabel="Senha:"
          name="password"
          control={control}
          textError={
            errors.password?.message || loginReducer.login.data?.message
          }
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
