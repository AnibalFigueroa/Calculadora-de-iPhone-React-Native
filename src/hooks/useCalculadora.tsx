import React, { useState, useRef } from 'react'

enum Operaciones {
    dividir,
    multiplicar,
    restar,
    sumar
}

export const useCalculadora = () => {

    const [numeroAnterior, setNumeroAnterior] = useState('0')
    const [resultado, setResultado] = useState('0');
    const operacion = useRef<Operaciones>();

    const limpiar = () => {
        setNumeroAnterior('0');
        setResultado('0');
    };

    const ingresarNumero = ( numero:string ) => {

        //No aceptar doble punto
        if (resultado.includes('.') && numero === '.') return;

        if (resultado.startsWith('0') || resultado.startsWith('-0')) {

            //Punto decimal
            if (numero === '.') {
                setResultado(resultado + numero);

              //Evaluar si es otro cero y hay un punto
            } else if (numero === '0' && !resultado.includes('.')) {
                setResultado(resultado + numero);      

              //Evaluar si es diferente al cero y no hay un punto
            } else if (numero === '0' && !resultado.includes('.')) {
                setResultado(resultado);

              //Evitar ceros sin puntos
            } else if (numero === '0' && resultado.includes('.')) {
                setResultado(numero);
                
            } else if (numero !== '0' && resultado.startsWith('0')) {
                resultado.slice(0, 1);
                setResultado(numero);

            } else {
                setResultado(resultado + numero);
            }

        } else {
            setResultado(resultado + numero);
        }
    };

    const positivoNegativo = () => {
        if ( resultado.includes('-') ) {
            setResultado(resultado.replace('-', ''));

        } else {
            setResultado('-' + resultado);
        }
    };

    const cambiarResultadoANumeroAnterior = () => {
        setNumeroAnterior(resultado)
        setResultado('0');
    };
 
    const btnDividir = () => {
        operacion.current = Operaciones.dividir;
        cambiarResultadoANumeroAnterior();
    };

    const btnMultiplicar = () => {
        operacion.current = Operaciones.multiplicar;
        cambiarResultadoANumeroAnterior();
    };

    const btnSumar = () => {
            operacion.current = Operaciones.sumar;
        cambiarResultadoANumeroAnterior();
    };

    const btnRestar = () => {
        operacion.current = Operaciones.restar;
        cambiarResultadoANumeroAnterior();
    };

    const calcular = () => {
        let numeroA = Number(numeroAnterior);
        let res = Number(resultado);

        switch (operacion.current) {
            case Operaciones.multiplicar:
                let multiplicacion = numeroA * res;
                setResultado(multiplicacion.toString());
                break;

            case Operaciones.dividir:
                let divicion = numeroA / res;
                setResultado(divicion.toString());
                break;

            case Operaciones.sumar:
                let sumatoria = numeroA + res;
                setResultado(sumatoria.toString());
                break;
            case Operaciones.restar:
                let resta = numeroA - res;
                setResultado(resta.toString());
                break;
        }   
    };

    return {
        limpiar,
        positivoNegativo,
        resultado,
        numeroAnterior,
        btnSumar,
        btnRestar,
        btnMultiplicar,
        btnDividir,
        calcular,
        ingresarNumero
    }
}
