import React from 'react'
import { View, Text } from 'react-native'
import { styles } from '../theme/AppTheme';
import { BotonCalculadora } from '../components/BotonCalculadora';
import { useCalculadora } from '../hooks/useCalculadora';

export const CalculadoraScreen = () => {

    const { 
        numeroAnterior, 
        resultado, 
        limpiar, 
        positivoNegativo,
        btnDividir,
        ingresarNumero,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        calcular
    } = useCalculadora();

    return (
        <View style={ styles.containerCalculadora }>
            {
                (numeroAnterior !== '0' && <Text style={ styles.resultadoPequeno }> { numeroAnterior } </Text>)
            }
            <Text 
                style={ styles.resultado }
                numberOfLines={ 1 }
                adjustsFontSizeToFit={ true }
            > 
                { resultado } 
            </Text>

            <View style={ styles.fila }>
                <BotonCalculadora texto="C" color="#9B9B9B" ancho={ false } accion={ limpiar }/>
                <BotonCalculadora texto="+/-" color="#9B9B9B" ancho={ false } accion={ positivoNegativo }/>
                <BotonCalculadora texto="%" color="#9B9B9B" ancho={ false } accion={ limpiar }/>
                <BotonCalculadora texto="/" color="orange" ancho={ false } accion={ btnDividir }/>
            </View>

            <View style={ styles.fila }>
                <BotonCalculadora texto="7" color="#2D2D2D" ancho={ false } accion={ () => ingresarNumero('7') }/>
                <BotonCalculadora texto="8" color="#2D2D2D" ancho={ false } accion={ () => ingresarNumero('8') }/>
                <BotonCalculadora texto="9" color="#2D2D2D" ancho={ false } accion={ () => ingresarNumero('9') }/>
                <BotonCalculadora texto="X" color="orange" ancho={ false } accion={ btnMultiplicar }/>
            </View>

            <View style={ styles.fila }>
                <BotonCalculadora texto="4" color="#2D2D2D" ancho={ false } accion={ () => ingresarNumero('4') }/>
                <BotonCalculadora texto="5" color="#2D2D2D" ancho={ false } accion={ () => ingresarNumero('5') }/>
                <BotonCalculadora texto="6" color="#2D2D2D" ancho={ false } accion={ () => ingresarNumero('6') }/>
                <BotonCalculadora texto="-" color="orange" ancho={ false } accion={ btnRestar }/>
            </View>

            <View style={ styles.fila }>
                <BotonCalculadora texto="1" color="#2D2D2D" ancho={ false } accion={ () => ingresarNumero('1') }/>
                <BotonCalculadora texto="2" color="#2D2D2D" ancho={ false } accion={ () => ingresarNumero('2') }/>
                <BotonCalculadora texto="3" color="#2D2D2D" ancho={ false } accion={ () => ingresarNumero('3') }/>
                <BotonCalculadora texto="+" color="orange" ancho={ false } accion={ btnSumar }/>
            </View>

            <View style={ styles.fila }>
                <BotonCalculadora texto="0" color="#2D2D2D" ancho={ true } accion={ () => ingresarNumero('0') }/>
                <BotonCalculadora texto="." color="#2D2D2D" ancho={ false } accion={ () => ingresarNumero('.') }/>
                <BotonCalculadora texto="=" color="orange" ancho={ false } accion={ calcular }/>
            </View>
        </View>
    )
}
