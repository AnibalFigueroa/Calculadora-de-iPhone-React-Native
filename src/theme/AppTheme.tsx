import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    containerCalculadora: {
        flex: 1,
        paddingHorizontal: 15,
        justifyContent: 'flex-end'
    },
    resultado: {
        fontSize: 50,
        color: 'white',
        textAlign: 'right',
        marginBottom: 10
    },
    resultadoPequeno: {
        fontSize: 30,
        color: 'rgba(255, 255, 255, 0.5)',
        textAlign: 'right'
    },
    fila: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10
    }
});