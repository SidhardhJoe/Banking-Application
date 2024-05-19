import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, View, } from 'react-native';
import Home from './Pages/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Testpage from './Pages/Testpage';

const Stack = createStackNavigator();



export default function App() {

  return (
    <NavigationContainer>
      <View style={styles.container}>
      <Stack.Navigator initialRouteName="Home">
        {/* <Stack.Screen name="Home" component={Home} /> */}
        <Stack.Screen name="hehe" component={Testpage} />


      </Stack.Navigator>
      </View>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
