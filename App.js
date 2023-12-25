
import React from 'react';
import Navigation from './Navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Navigation" component={Navigation}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
