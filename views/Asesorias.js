import React from 'react'
import { StyleSheet, Text, View, Pressable, StatusBar, FlatList, TextInput, ScrollView } from 'react-native';
import { Image, NativeBaseProvider, Center } from "native-base";
import ListaAsesorias from '../src/assets/data/ListaAsesorias';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Asesorias = () => {
    return (
        <NativeBaseProvider>
            <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
            <ScrollView style={styles.cuerpo}>

                <Text style={styles.titulo}>Asesorias</Text>

                <View style={styles.campo}>
                    <TextInput
                        style={styles.input}
                        placeholderTextColor={'#666'}
                        placeholder='Buscar asesorias'
                    />
                </View>

                <View style={styles.listaFiltros}>
                    <Text style={styles.filtros}>Todo</Text>
                    <Text style={styles.filtros}>Arte</Text>
                    <Text style={styles.filtros}>Academia</Text>
                    <Text style={styles.filtros}>Programación</Text>
                </View>

                <Text style={styles.añadirFiltro}>
                    {'Añadir filtro '}
                    <AntDesign name="down" size={15} color='#A259FF' />
                </Text>

                <View style={styles.contenedorEmpleos}>
                    <FlatList
                        data={ListaAsesorias.items[0].advices}
                        renderItem={({ item }) => (
                            <View style={styles.empleo}>
                                <Text style={styles.tituloEmpleo}>{item.title}</Text>
                                <Text style={styles.info}>{item.info.substring(0, 100) + ' ...'}</Text>
                                <Text style={styles.salario}>{item.price + ' / hora'}</Text>
                                <Text style={styles.añadirFiltro}>Información</Text>
                            </View>
                        )}
                    />
                </View>
                <View style={{ height: 60 }}>
                </View>
            </ScrollView>
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
    subtituloEmpleo: {
        fontSize: 10
    },
    contenedorEmpleos: {
        backgroundColor: '#F4F4F4',
        margin: 30,
        borderRadius: 30,
        paddingTop: 15
    },
    info: {
        marginTop: 10,
        marginBottom: 10
    },
    salario: {
        fontWeight: '600',
        marginBottom: 10
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

export default Asesorias;