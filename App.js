import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';



export default function App() {
  const [number, setNumber] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={{...styles.text, color: "blue"}}>result : {number} </Text>
      <View style={{ flexDirection: "row", gap: 10 }}>
        <Button title='up' onPress={() => setNumber(number + 1)} />
        <Button title='down' onPress={() => setNumber(number - 1)} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: "red",

  },
  text: {
    fontSize: 50,
    fontWeight: "bold",
    color: "red",
  },
});