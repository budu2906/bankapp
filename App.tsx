import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import './global.css'
import Navigation from './navigation/Navigation';
import { AuthProvider } from './providers/AuthProvider';
export default function App() {
  return (
    <AuthProvider>
      <Navigation/>
    </AuthProvider>
  );
}


