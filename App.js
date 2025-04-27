import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PantallaInicio from './screens/PantallaInicio';
import PantallaDetalle from './screens/PantallaDetalle';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Inicio" component={PantallaInicio} />
        <Stack.Screen 
          name = "Detalle" 
          component={PantallaDetalle} 
          options={({ route }) => ({
            title: `Perfil de ${route.params.nombre ?? 'Invitado'}, ${route.params.edad ?? '??'} años`
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}