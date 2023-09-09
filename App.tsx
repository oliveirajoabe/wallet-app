import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { defaultTheme } from './src/theme/default';
import { StatusBar } from 'expo-status-bar';
<<<<<<< HEAD

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider theme={defaultTheme}>
        <Routes />
        <StatusBar style="light" />
      </ThemeProvider>
    </NavigationContainer>
=======
import Login from './src/screens/Login';
import { Provider } from 'react-redux';
import store, { persistor } from './src/store';
import { PersistGate } from 'redux-persist/integration/react';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={defaultTheme}>
          <Login />
          <StatusBar style="light" />
        </ThemeProvider>
      </PersistGate>
    </Provider>
>>>>>>> b12903b30d33706ff1f877eabf2106b359012df8
  );
}
