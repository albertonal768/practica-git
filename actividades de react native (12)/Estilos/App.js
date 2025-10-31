import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Texto con estilos.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d5dfe0ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24, 
    fontWeight:'bold',
    color: '#00796b'
  }
});