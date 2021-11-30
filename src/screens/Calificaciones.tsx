import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useEffect } from 'react';

const Calificaciones = () => {

    const [Estudiante, setEstudiante] = useState<string>('')
    const [PrimerP, setPrimerP] = useState<string>('')
    const [SegundoP, setSegundoP] = useState<string>('')
    const [Final, setFinal] = useState<number>(0)
    const [CrearLista, setCrearLista] = useState<string[]>([])



    const calcular = () => {
        let calculo = ((parseFloat(PrimerP) + (parseFloat(SegundoP))) / 2)



        setFinal(calculo)
        setCrearLista([...CrearLista,Estudiante])




    }








    return (

       
        <View style={styles.container}>
             <ScrollView>
            <View>


                <View >
                    <View>
                        <Text style={styles.Title}>Calificaciones</Text>

                    </View>

                    <TextInput style={styles.nombre}
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
                CrearLista.map((lista,index,) => (
                    <View key={index} >
                        <Text style={styles.nombre} >{Estudiante}</Text>
                        <Text style={styles.nota} >Nota: {Final}</Text>
                        



                      

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
       
        marginTop: "20%",

        backgroundColor: 'white',
    },
    Title: {
        fontSize: 30,
        backgroundColor: '#bfbaba'
    },
    notas: {
        flexDirection: 'row',
        

    },
    botonAgregar: {
        
        backgroundColor: 'gray',
        justifyContent: 'center',
        marginLeft: "10%",

    },
    textboton: {
        color: 'green',
        fontSize:20

    },
    text: {

        fontSize: 20,
        color: '#FFFFFF',
        width: '70%'

    },
    inputs: {
        marginLeft: '10%',
        fontSize: 30
               
    },
    cuadro: {
        

        flexDirection: 'row',

    },
    nombre: {
        color: '#05786A',
        fontSize:29
        
    },
    nota:{
        marginLeft: '80%',
        color: '#05786A',
        fontSize:29


    }

}
)