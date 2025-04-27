import { View, Text, StyleSheet } from 'react-native';

export default function PantallaDetalle({ route }) {
    const { nombre , edad } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.saludo}>Hola, {nombre} 👋</Text>
            <Text style={styles.mensaje}>Es cierto que tienes {edad} años?</Text>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      saludo: {
        fontSize: 24, 
        fontWeight: 'bold', 
        marginBottom: 12
      },
      mensaje: {
        fontSize: 16, 
        color: '#555'
      },
})