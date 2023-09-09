import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { defaultTheme } from './src/theme/default';
import { StatusBar } from 'expo-status-bar';

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
  );
}
