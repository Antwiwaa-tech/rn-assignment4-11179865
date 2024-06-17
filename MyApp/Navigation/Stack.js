
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login'

const Stack = createNativeStackNavigator();

export default function MyStack () {
  return (
    <NavigationContainer>
       <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name=' Login' component={Login} />
          
    
    </Stack.Navigator>
    </NavigationContainer>
  );
}

