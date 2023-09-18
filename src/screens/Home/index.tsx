import React from 'react';

import * as S from './styles';
import { Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { fetchLogout } from '../../store/reducers/login/actions';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useNavigation } from '@react-navigation/native';

import { NavigationProp } from '@react-navigation/native';

type Navigation = NavigationProp<RootRoutes, 'CadastrarConta'>;

export default function Home() {
  const dispatch = useDispatch();
  const { login } = useAppSelector(({ loginReducer }) => loginReducer);
  const navigation = useNavigation<Navigation>();

  const handleClear = async () => {
    await AsyncStorage.clear();
  };

  const handleLogout = () => {
    dispatch(
      fetchLogout({
        userId: login.data?.id,
        accessToken: login.data?.token,
        onSuccess: handleClear,
      }),
    );
  };

  const handleNavigateCreate = () => {
    navigation.navigate('CadastrarConta');
  };

  return (
    <S.Container>
      <S.CustomText>26 Enterprises</S.CustomText>
      <Button title="Logout" onPress={handleLogout} />
      <Button title="Cadastrar conta" onPress={handleNavigateCreate} />
    </S.Container>
  );
}
