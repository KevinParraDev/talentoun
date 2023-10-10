import React from 'react'
import { StyleSheet, Text, View, Pressable, StatusBar, TextInput } from 'react-native';
import { NativeBaseProvider, Center, Image, ScrollView } from "native-base";
import AntDesign from 'react-native-vector-icons/AntDesign';

const popularItems = [
    {
        id: 1,
        title: 'Postres',
        stars: '4.5',
        ruta: require('../src/assets/img/ImgVerticales/4.png'),
        price: '$ 4.000'
    },
    {
        id: 2,
        title: 'Amigurumis',
        stars: '4.8',
        ruta: require('../src/assets/img/ImgVerticales/3.png'),
        price: '$ 100.000'
    },
    {
        id: 3,
        title: 'Batas de laboratorio',
        stars: '4.0',
        ruta: require('../src/assets/img/ImgVerticales/2.png'),
        price: '$ 80.000'
    },
    {
        id: 4,
        title: 'Accesorios',
        stars: '4.2',
        ruta: require('../src/assets/img/ImgVerticales/1.png'),
        price: '$ 30.000'
    }
]


const Emprendimientos = () => {
    return (
        <NativeBaseProvider>
            <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
            <ScrollView style={styles.cuerpo}>
                <Text style={styles.titulo}>Emprendimientos</Text>

                <View style={styles.campo}>
                    <TextInput
                        style={styles.input}
                        placeholder='Buscar emprendimiento'
                        placeholderTextColor={'#666'}
                    />
                </View>

                <View style={styles.listaFiltros}>
                    <Text style={styles.filtros}>Todo</Text>
                    <Text style={styles.filtros}>Comida</Text>
                    <Text style={styles.filtros}>Ropa</Text>
                    <Text style={styles.filtros}>Artesanias</Text>
                </View>

                <View>
                    <Text style={styles.titulosCategorias}>Popular</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {popularItems.map(element => {
                            return (
                                <View style={{ marginBottom: -50 }}>
                                    <Image
                                        source={element.ruta} alt={element.title} size="2xl"
                                        style={styles.popularImage}
                                    />
                                    <View style={styles.cajaTextoPopular}>
                                        <Text style={styles.popularImageText}>{element.title}</Text>
                                    </View>
                                    <View style={styles.cajaTextoPopular}>
                                        <Text style={styles.popularImageText}>
                                            <AntDesign
                                                name="star"
                                                size={15}
                                                color='#F8D675'
                                            />
                                            {'  ' + element.stars}</Text>
                                    </View>
                                </View>
                            )
                        })}
                    </ScrollView>
                </View>

                <View>
                    <Text style={styles.titulosCategorias}>Recomendado</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {popularItems.map(element => {
                            return (
                                <View style={styles.cartaProducto}>
                                    <Image
                                        source={element.ruta} alt={element.title} size="2xl"
                                        style={styles.recomendadoImage}
                                    />
                                    <Text style={styles.textoCarta}>{element.title}</Text>
                                    <View style={styles.cajaPrecio}>
                                        <Text style={styles.popularImageText}>{element.price}</Text>
                                    </View>
                                </View>
                            )
                        })}
                    </ScrollView>
                </View>

                <View>
                    <Text style={styles.titulosCategorias}>Todo</Text>
                    <ScrollView showsHorizontalScrollIndicator={false}>
                        {popularItems.map(element => {
                            return (
                                <Image
                                    source={element.ruta} alt={element.title} size="2xl"
                                    style={styles.recomendadoImage}
                                />
                            )
                        })}
                    </ScrollView>
                </View>

            </ScrollView>
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
    titulosCategorias: {
        fontSize: 20,
        padding: 20,
        fontWeight: '600',
        color: 'black'
    },
    popularImage: {
        marginLeft: 15,
        borderRadius: 30,
        height: 300,
        flex: 1
    },
    popularImageText: {
        color: 'white',
        textAlign: 'center',
        paddingLeft: 10,
        paddingRight: 10,
    },
    cajaTextoPopular: {
        alignSelf: 'flex-start',
        bottom: 80,
        left: 30,
        backgroundColor: '#4D5652',
        borderRadius: 15,
        padding: 5,
        marginBottom: 5
    },
    recomendadoImage: {
        borderRadius: 30,
        height: 150,
        width: 200
    },
    cartaProducto: {
        marginLeft: 15,
        backgroundColor: '#F3F8FE',
        borderRadius: 30,
    },
    textoCarta: {
        textAlign: 'center',
        fontWeight: '600',
        paddingTop: 5,
        fontSize: 15,
        marginBottom: -20
    },
    cajaPrecio: {
        alignSelf: 'flex-start',
        bottom: 50,
        left: 10,
        backgroundColor: '#488C5C',
        borderRadius: 15,
        padding: 5,
        marginBottom: 5
    }
})

export default Emprendimientos;