import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import BottomBar from './Screen/BottomNavigation';
import Bag from './Screen/Bag';
import Pay from './Screen/Pay'
import Login from './Screen/Login';
import Signup from './Screen/Signup';
import Pass from './Screen/Pass';
import LPass from './Screen/LPass';
import Email from './Screen/Email';
import ProductDetail from './Screen/ProductDetail';
const Stack = createStackNavigator();

function Navigation() {
  return (
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen options={{ headerShown: false }} name="BottomBar" component={BottomBar} />
        <Stack.Screen options={{ headerShown: false }} name="Bag" component={Bag} />
        <Stack.Screen options={{ headerShown: false }} name="Pay" component={Pay} />
        <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
        <Stack.Screen options={{ headerShown: false }} name="Signup" component={Signup} />
        <Stack.Screen options={{ headerShown: false }} name="Pass" component={Pass} />
        <Stack.Screen options={{ headerShown: false }} name="LPass" component={LPass}/>
        <Stack.Screen options={{ headerShown: false }} name="Email" component={Email}/>
        <Stack.Screen options={{ headerShown: false }} name="ProductDetail" component={ProductDetail}/>
      </Stack.Navigator>
  );
}

export default Navigation;
