import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { defaultTheme } from './src/theme/default';
import { StatusBar } from 'expo-status-bar';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './src/store';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <ThemeProvider theme={defaultTheme}>
            <Routes />
            <StatusBar style="light" />
          </ThemeProvider>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
