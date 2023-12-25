import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Scr1 from './Scr1';
import Scr2 from './Scr2';
import Scr3 from './Src3';

const TopNavigation = () => {
    const Tab = createMaterialTopTabNavigator();
    return (
    <Tab.Navigator
    screenOptions={{
    }}>
      <Tab.Screen
        name="Nữ"
        component={Scr1}
        options={{
            headerShown: false,
            tabBarStyle:{
                backgroundColor:'black',
                paddingTop:20
              },
            tabBarIconStyle:{
              display: "none"
            },
            tabBarLabelPosition:'beside-icon',
            tabBarLabelStyle:{
                color:'white'
            },
            tabBarIndicatorStyle:{
                backgroundColor:'gray'
            }
        }}
      />
      <Tab.Screen
        name="Nam"
        component={Scr2}
        options={{
            headerShown: false,
            tabBarStyle:{
                backgroundColor:'black',
                paddingTop:20
              },
            tabBarIconStyle:{
              display: "none"
            },
            tabBarLabelPosition:'beside-icon',
            tabBarLabelStyle:{
                color:'white'
            },
            tabBarIndicatorStyle:{
                backgroundColor:'gray'
            }
        }}
      />
      <Tab.Screen
        name="Trẻ em"
        component={Scr3}
        options={{
            headerShown: false,
            tabBarStyle:{
                backgroundColor:'black',
                paddingTop:20
              },
            tabBarIconStyle:{
              display: "none"
            },
            tabBarLabelPosition:'beside-icon',
            tabBarLabelStyle:{
                color:'white'
            },
            tabBarIndicatorStyle:{
                backgroundColor:'gray'
            },
        }}
      />
    </Tab.Navigator>
    );
};
export default TopNavigation;
