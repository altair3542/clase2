import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import { useState } from 'react';

export default function PantallaInicio({ navigation }) {
    const [nombre, setNombre] = useState('')
    const [edad, setEdad] = useState('')

    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Bienvenido a la App</Text>

        <TextInput
          style={styles.input}
          placeholder="Ingrese su nombre"
          onChangeText={setNombre}
        />
        <TextInput
          style={styles.input}
          placeholder="Ingrese su edad"
          onChangeText={setEdad}
        />

        <Button
          title="Ir a tu perfil"
          onPress={() => navigation.navigate('Detalle', { nombre, edad })}
        />
      </View>
    );
  }

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
      },
    titulo: {
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        borderWidth: 1, 
        borderColor: '#ccc', 
        borderRadius: 6,
        padding: 12, 
        fontSize: 16, 
        marginBottom: 16
      },
});