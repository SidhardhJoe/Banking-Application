import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Design from './Components/Design';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Design></Design>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,s
  },
});
