import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Image, NativeBaseProvider, Center } from "native-base";
import Inicio from './views/Inicio';
import Emprendimientos from './views/Emprendimientos';
import Asesorias from './views/Asesorias';

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navigation from './Navigation';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Navigation />
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
    paddingTop: 100,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
  },
  descripcion: {
    textAlign: 'center',
    color: '#9586A8',
    paddingTop: 120,
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
