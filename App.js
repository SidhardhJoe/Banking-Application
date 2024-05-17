import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, } from 'react-native';
import Design from './Pages/Design';

export default function App() {
  
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Design></Design>
      </View>
    )
  }

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
});
