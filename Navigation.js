import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Bienvenida from './views/Bienvenida.js';
import Emprendimientos from './views/Emprendimientos.js';
import Asesorias from './views/Asesorias.js';
import { StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator()
const Tab = createMaterialBottomTabNavigator()

function Inicio() {
    return (
        <Tab.Navigator
            initialRouteName="Asesorias"
            barStyle={{ backgroundColor: '#FAFAFA' }}
            labeled={false}
        >
            <Tab.Screen name='Emprendimientos' component={Emprendimientos} />
            <Tab.Screen name='Asesorias' component={Asesorias} />
        </Tab.Navigator>
    )
}

function Navigation(props) {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name='Bienvenida' component={Bienvenida} />
                <Stack.Screen name='Inicio' component={Inicio} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    nabBar: {
        position: 'absolute',
        bottom: 25,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    }
})

export default Navigation;