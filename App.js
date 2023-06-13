import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Imoveis from './src/screens/Imoveis';
import Repositorios from './src/screens/Repositorios';

export default function App() {
  return (
    <SafeAreaProvider>
      <Repositorios />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});
