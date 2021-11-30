import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useEffect } from 'react';

const Calificaciones = () => {

    const [Estudiante, setEstudiante] = useState<string>('')
    const [Estudiantes, setEstudiantes] = useState<string[]>([])
    const [PrimerP, setPrimerP] = useState<string>('')
    const [SegundoP, setSegundoP] = useState<string>('')
    const [Final, setFinal] = useState<number>(0)
    const [CrearLista, setCrearLista] = useState<string[]>([])



    const calcular = () => {

        setEstudiantes([...Estudiantes, Estudiante])
        let divide = 2
        let calculo = ((parseFloat(PrimerP) + (parseFloat(SegundoP))) / divide)



        setFinal(calculo)


        mostrarLista()
    }
    const mostrarLista = () => {
        setCrearLista([...CrearLista, Estudiante])
    }




    return (


        <View style={styles.container}>
            <ScrollView>
                <View>


                    <View >
                        <View>
                            <Text style={styles.Title}>Calificaciones</Text>

                        </View>
                        <Text style={styles.nombre}>Nombre del Estudiante</Text>
                        <TextInput style={styles.nombreInput}
                            placeholder="Nombre del estudiante"
                            onChangeText={setEstudiante}


                        />
                    </View>
                    <View style={styles.cuadro}>
                        <View style={styles.notas}>

                            <TextInput style={styles.inputs}
                                placeholder="IP"
                                onChangeText={setPrimerP}

                            />

                            <TextInput
                                style={styles.inputs}
                                placeholder="IIP"
                                onChangeText={setSegundoP} />

                            <Text style={styles.inputs}>{Final}</Text>



                        </View>
                        <TouchableOpacity style={styles.botonAgregar} onPress={calcular} >
                            <Text style={styles.textboton}>Agregar</Text>
                        </TouchableOpacity>


                    </View>

                </View>
                {
                    CrearLista.map((lista, index, result) => (
                        <View style={styles.map}>
                            <Text style={styles.nombre} >{Estudiante}</Text>
                            <Text style={styles.nombre}>  ________________________________ </Text>
                            <Text style={styles.nota} >Nota Final: {Final}</Text>






                        </View>
                    ))
                }
            </ScrollView>
        </View>
    )
}

export default Calificaciones;

const styles = StyleSheet.create({
    container: {

        flex: 1,
        justifyContent: 'flex-start',

        marginTop: "10%",

        backgroundColor: 'white',
    },
    Title: {
        fontSize: 30,
        backgroundColor: '#bfbaba',
        marginHorizontal: 23

    },
    notas: {
        flexDirection: 'row',
        




    },
    botonAgregar: {

        marginTop: "8%",
        backgroundColor: 'gray',
        justifyContent: 'center',
        marginLeft: "10%",


    },
    textboton: {
        color: 'green',
        fontSize: 20

    },
    text: {
        color: '#05786A',
        fontSize: 20,
        width: '70%'

    },
    inputs: {
        marginTop: "13%",
        height: 50,
        margin: 10,
        marginLeft: '10%',
        fontSize: 30,
        color: '#05786A',
        borderWidth: 2,
        borderRadius: 20



    },
    cuadro: {
        width: '100%',
        flexDirection: 'row',
        marginBottom: 20

    },
    nombre: {
        marginTop: 5,
        marginHorizontal: 20,
        color: '#05786A',
        fontSize: 24


    },
    nota: {
        marginLeft: '80%',
        color: '#05786A',
        fontSize: 29


    },
    map: {
        borderWidth: 2,
        borderColor: '#05786A',
        marginHorizontal: '5%',
        borderRadius: 30
    },
    nombreInput: {
        marginTop: 5,
        marginHorizontal: 20,
        color: '#05786A',
        fontSize: 24,
        borderColor: 'gray',
        borderWidth: 2,
        height: 60


    },

}
)