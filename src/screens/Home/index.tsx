import React from 'react';

import * as S from './styles';
import { Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { fetchLogout } from '../../store/reducers/login/actions';
import { useAppSelector } from '../../hooks/useAppSelector';

export default function Home() {
  const dispatch = useDispatch();
  const { login } = useAppSelector(({ loginReducer }) => loginReducer);

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

  return (
    <S.Container>
      <S.CustomText>26 Enterprises</S.CustomText>
      <Button title="Logout" onPress={handleLogout} />
    </S.Container>
  );
}
