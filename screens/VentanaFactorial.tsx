import * as React from 'react';
import { StyleSheet } from 'react-native';
import Factorial from '../components/Factorial';

import Resta from '../components/Factorial';
import { Text, View } from '../components/Themed';

export default function VentanaFactorial() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Factorial de un número</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Factorial />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
