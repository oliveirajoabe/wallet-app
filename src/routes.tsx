import React, { useMemo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from './screens/Login';
import Home from './screens/Home';
import { useAppSelector } from './hooks/useAppSelector';

export default function Routes() {
  const { login } = useAppSelector(({ loginReducer }) => loginReducer);

  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  function Tabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="home" component={Home} />
      </Tab.Navigator>
    );
  }

  const isLogged = useMemo(() => login.data?.token, [login]);

  return (
    <Stack.Navigator initialRouteName={!isLogged ? 'login' : 'menuListTab'}>
      {isLogged && (
        <Stack.Screen
          name="menuListTab"
          component={Tabs}
          options={{
            headerShown: false,
          }}
        />
      )}
      {!isLogged && (
        <Stack.Screen
          name="login"
          component={Login}
          options={{ headerShown: false }}
        />
      )}
    </Stack.Navigator>
  );
}
