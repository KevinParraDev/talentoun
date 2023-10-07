import React from 'react'
import { StyleSheet, Text, View, Pressable, StatusBar } from 'react-native';
import { Image, NativeBaseProvider, Center } from "native-base";

const Emprendimientos = () => {
    return (
        <NativeBaseProvider>
            <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
            <View style={styles.cuerpo}>
                <Text style={styles.subtitulo}>Explorar</Text>
                <Text style={styles.titulo}>Emprendimientos</Text>
            </View>
        </NativeBaseProvider>
    )
}

const styles = StyleSheet.create({
    subtitulo: {
        fontSize: 15,
        paddingTop: 15,
        paddingLeft: 10,
        color: 'black',
    },
    titulo: {
        fontSize: 30,
        paddingLeft: 10,
        color: 'black',
        fontWeight: '400'
    },
    cuerpo: {
        backgroundColor: '#FFF',
        flex: 1
    }
})

export default Emprendimientos;