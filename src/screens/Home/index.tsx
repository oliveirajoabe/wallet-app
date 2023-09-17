import React from 'react';

import * as S from './styles';
import { Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationProp } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { fetchLogout } from '../../store/reducers/login/actions';
import { useAppSelector } from '../../hooks/useAppSelector';

type Navigation = NavigationProp<RootRoutes, 'login'>;

export default function Home() {
  const dispatch = useDispatch();
  const navigation = useNavigation<Navigation>();
  const { login } = useAppSelector(({ loginReducer }) => loginReducer);

  const handleClear = async () => {
    await AsyncStorage.clear();

    dispatch(
      fetchLogout({
        userId: login.data?.id,
        accessToken: login.data?.token,
      }),
    );
  };

  return (
    <S.Container>
      <S.CustomText>26 Enterprises</S.CustomText>
      <Button title="Logout" onPress={handleClear} />
    </S.Container>
  );
}
