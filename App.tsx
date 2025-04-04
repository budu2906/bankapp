import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import StoryContainer from './components/screens/home/stories/StoryContainer';
import './global.css'
import Navigation from './navigation/Navigation';
import { AuthProvider } from './providers/AuthProvider';
import { DataProvider } from './providers/DataProvider';
import Toast from 'react-native-toast-message';

export default function App() {
  return (
     <>
      <StatusBar  style='auto'/>
    <AuthProvider>
      <DataProvider>
        <StoryContainer />
  
    <SafeAreaView style={{flex: 1}}>
     <Toast visibilityTime={3000} />
      <Navigation/>
    </SafeAreaView>
      </DataProvider>
    </AuthProvider>
     </>
  );
}


