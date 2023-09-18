import React, { useMemo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from '../screens/Login';
import { useAppSelector } from '../hooks/useAppSelector';
import { routesPrivatesStacks, routesPrivatesTabs } from './routes';

import { defaultTheme } from '../../src/theme/default';

export default function Routes() {
  const { login } = useAppSelector(({ loginReducer }) => loginReducer);

  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  const isLogged = useMemo(() => login.data?.token, [login]);

  const configs = {
    tabBarActiveTintColor: defaultTheme.colors.green,
    tabBarStyle: {
      backgroundColor: defaultTheme.colors.gray2,
    },
    headerTintColor: defaultTheme.colors.white,
    headerStyle: {
      backgroundColor: defaultTheme.colors.gray2,
    },
    headerTitleAlign: 'center',
    headerBackTitleVisible: false,
  };

  function Tabs() {
    return (
      <Tab.Navigator>
        {routesPrivatesTabs.map((tab) => (
          <Tab.Screen
            key={tab.name}
            name={tab.name}
            component={tab.component}
            options={{ tabBarIcon: tab.icon, ...configs }}
          />
        ))}
      </Tab.Navigator>
    );
  }

  return (
    <Stack.Navigator initialRouteName={!isLogged ? 'login' : 'menuListTab'}>
      {isLogged && (
        <>
          <Stack.Screen
            name="menuListTab"
            component={Tabs}
            options={{
              headerShown: false,
            }}
          />

          {routesPrivatesStacks.map((item) => (
            <Stack.Screen
              key={item.name}
              name={item.name}
              component={item.component}
              options={{ ...configs }}
            />
          ))}
        </>
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
