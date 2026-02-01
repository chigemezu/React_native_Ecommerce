import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import Toast from 'react-native-toast-message';

import { useColorScheme } from '@/hooks/use-color-scheme';



export default function RootLayout() {
 
  return (
    <>
     <Stack
      screenOptions={{
        headerShown: false,
      }}/>
      <Toast />
      </>
  );
}
