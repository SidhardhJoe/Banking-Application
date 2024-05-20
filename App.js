import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, View, } from 'react-native';
import Home from './Pages/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Testpage from './Pages/Testpage';

const Stack = createStackNavigator();



export default function App() {

  return (
      <View style={styles.container}>
    <Home/>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
