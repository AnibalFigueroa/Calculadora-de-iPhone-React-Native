import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

interface Props {
    texto: string;
    color: string;
    ancho: boolean;
    accion: ( numero?: string ) => void;
}

export const BotonCalculadora = (props: Props) => {
    return (
        <TouchableOpacity onPress={() => props.accion(props.texto) }>
            <View style={{
                ...styles.boton,
                backgroundColor: props.color,
                width: ( props.ancho ) ? 180 : 80
            }}>

                <Text style={{
                    ...styles.botonTexto,
                    color: (props.color === '#9B9B9B') ? 'black' : 'white'
                }}>
                    { props.texto }
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    boton: {
        height: 80,
        width: 80,
        justifyContent: 'center',
        borderRadius: 100,
        marginHorizontal: 10
    },
    botonTexto: {
        color: 'white',
        fontSize: 30,
        fontWeight: '300',
        textAlign: 'center',
        padding: 10
    }
});