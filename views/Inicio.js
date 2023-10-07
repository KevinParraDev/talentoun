import React from 'react'
import { Text, Button, View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Emprendimientos from './Emprendimientos.js';
import Asesorias from './Asesorias.js';

const Stack = createNativeStackNavigator()
const Tab = createMaterialBottomTabNavigator()

const Inicio = ({ navigation }) => {

    const visitarEmprendimientos = () => navigation.navigate('Emprendimientos')

    return (
        <Tab.Navigator
            initialRouteName='Bienvenida'
            screenOptions={{ headerShown: false }}
        >
            <Tab.Screen name='Emprendimientos' component={Emprendimientos} />
            <Tab.Screen name='Asesorias' component={Asesorias} />
        </Tab.Navigator>
    )
}

export default Inicio;