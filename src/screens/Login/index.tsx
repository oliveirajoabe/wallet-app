import React, { useCallback, useEffect } from 'react';

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
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

import { NavigationProp } from '@react-navigation/native';

type Navigation = NavigationProp<RootRoutes, 'menuListTab'>;

export default function Login() {
  const dispatch = useDispatch();
  const { login } = useAppSelector(({ loginReducer }) => loginReducer);
  const navigation = useNavigation<Navigation>();

  const getAllKeys = async () => {
    console.log('CHAVE NO LOCAL', await AsyncStorage.getAllKeys());
    console.log('ITEMS DO LOCAL', await AsyncStorage.getItem('persist:wallet'));
    console.log('LOGIN', login);
  };

  const handleRedirectLoggedSuccess = useCallback(() => {
    navigation.navigate('menuListTab');
  }, []);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data: DataRequest) => {
    try {
      dispatch(fetchLogin({ ...data, onSuccess: handleRedirectLoggedSuccess }));
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
          textError={errors.email?.message || login.data?.message}
          required
        />
      </S.WrapperEmail>
      <View>
        <Input
          textLabel="Senha:"
          name="password"
          control={control}
          textError={errors.password?.message || login.data?.message}
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
          titleButton={login.loading ? 'Carregando' : 'Entrar'}
          template="success"
          onPress={handleSubmit(onSubmit)}
        />
      </S.WrapperButton>
    </S.Container>
  );
}
