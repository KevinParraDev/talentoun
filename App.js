import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  Pressable
} from 'react-native';

import { Image, NativeBaseProvider, Center } from "native-base";

const App = () => {
  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.fondo}>
        <View style={{ padding: 110 }}></View>
        <View style={styles.cuadroIngreso}>
          <Center>
            <Image
              source={require('./src/assets/img/logo.png')} alt='Logo' size="40"
            />
          </Center>
          <Text style={styles.descripcion}>Encuentra empleo, emprendimientos, asesorias y practicas</Text>
          <Pressable style={styles.btnIngresar}>
            <Text style={styles.btnTextoIngresar}>Ingresar</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
  fondo: {
    backgroundColor: '#A259FF',
    flex: 1
  },
  cuadroIngreso: {
    backgroundColor: '#FFFFFF',
    height: 700,
    paddingTop: 70,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
  },
  descripcion: {
    textAlign: 'center',
    color: '#9586A8',
    paddingTop: 50,
    fontSize: 20
  },
  btnIngresar: {
    backgroundColor: '#6D28D9',
    padding: 20,
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 40
  },
  btnTextoIngresar: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 20,
    fontWeight: '900',
    textTransform: 'uppercase'
  },
})

export default App;
