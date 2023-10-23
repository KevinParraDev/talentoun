import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Bienvenida from './views/Bienvenida.js';
import Emprendimientos from './views/Emprendimientos.js';
import Asesorias from './views/Asesorias.js';
import Trabajo from './views/Trabajo.js';
import Practicas from './views/Practicas.js';
import { StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

function Inicio() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    height: 60,
                    position: 'absolute',
                    bottom: 16,
                    left: 16,
                    right: 16,
                    borderRadius: 30
                }
            }}
        >
            <Tab.Screen
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => (
                        <MaterialCommunityIcons
                            name="food"
                            size={25}
                            color={focused ? '#A259FF' : '#C2C2C2'}
                        />
                    )
                }}
                name='Emprendimientos' component={Emprendimientos}
            />
            <Tab.Screen
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => (
                        <MaterialIcons
                            name="work"
                            size={25}
                            color={focused ? '#A259FF' : '#C2C2C2'}
                        />
                    )
                }}
                name='Trabajo' component={Trabajo}
            />
            <Tab.Screen
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => (
                        <FontAwesome5
                            name="chalkboard-teacher"
                            size={25}
                            color={focused ? '#A259FF' : '#C2C2C2'}
                        />
                    )
                }}
                name='Asesorias' component={Asesorias}
            />
            <Tab.Screen
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => (
                        <MaterialCommunityIcons
                            name="nature-people"
                            size={25}
                            color={focused ? '#A259FF' : '#C2C2C2'}
                        />
                    )
                }}
                name='Practicas' component={Practicas}
            />
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

export default Navigation;