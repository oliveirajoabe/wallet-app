import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { defaultTheme } from './src/theme/default';
import { StatusBar } from 'expo-status-bar';
import Login from './src/screens/Login';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Login />
      <StatusBar style="light" />
    </ThemeProvider>
  );
}
