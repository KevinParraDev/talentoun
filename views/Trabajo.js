import React from 'react'
import { StyleSheet, Text, View, Pressable, StatusBar, FlatList, TextInput } from 'react-native';
import { Image, NativeBaseProvider, Center } from "native-base";
import Empleos from '../src/assets/data/Empleos';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Trabajo = () => {
    return (
        <NativeBaseProvider>
            <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
            <View style={styles.cuerpo}>

                <Text style={styles.titulo}>Empleo</Text>

                <View style={styles.campo}>
                    <TextInput
                        style={styles.input}
                        placeholder='Buscar empleo'
                        placeholderTextColor={'#666'}
                    />
                </View>

                <View style={styles.listaFiltros}>
                    <Text style={styles.filtros}>Todo</Text>
                    <Text style={styles.filtros}>Turismo</Text>
                    <Text style={styles.filtros}>Servicios</Text>
                    <Text style={styles.filtros}>Comercio</Text>
                </View>

                <Text style={styles.añadirFiltro}>
                    {'Añadir filtro '}
                    <AntDesign name="down" size={15} color='#A259FF' />
                </Text>

                <View style={styles.contenedorEmpleos}>
                    <FlatList
                        data={Empleos.items[0].jobs}
                        renderItem={({ item }) => (
                            <View style={styles.empleo}>
                                <Text style={styles.tituloEmpleo}>{item.title}</Text>
                                <Text style={styles.subtituloEmpleo}>{item.company + '-' + item.location}</Text>
                                <Text style={styles.añadirFiltro}>Información</Text>
                            </View>
                        )}
                    />
                </View>
            </View>
        </NativeBaseProvider>
    )
}

const styles = StyleSheet.create({
    titulo: {
        fontSize: 30,
        fontWeight: '600',
        padding: 30,
        color: 'black',
        textAlign: 'center'
    },
    cuerpo: {
        backgroundColor: '#FFF',
        flex: 1
    },
    campo: {
        marginHorizontal: 30,
    },
    input: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 20,
        backgroundColor: '#F3F8FE'
    },
    listaFiltros: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 10
    },
    filtros: {
        padding: 20
    },
    añadirFiltro: {
        color: '#A259FF',
        textAlign: 'center'
    },
    tituloEmpleo: {
        fontSize: 15,
        fontWeight: '600',
        color: 'black'
    },
    contenedorEmpleos: {
        backgroundColor: '#F4F4F4',
        margin: 30,
        borderRadius: 30,
        paddingTop: 15
    },
    empleo: {
        backgroundColor: '#FFF',
        padding: 20,
        marginBottom: 15,
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 20
    }
})

export default Trabajo;