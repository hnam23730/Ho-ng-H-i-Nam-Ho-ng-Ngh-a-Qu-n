import React, { useState } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Acc from './Profile';
import Bag from './Bag';
import TopBar from './TopNavigation';
const BottomBar = () => {
    const Tab = createBottomTabNavigator();
    const [cartItems, setCartItems] = useState([]);
    
    return (
    <Tab.Navigator>
      <Tab.Screen
        name="Bắt Đầu"
        component={Home}
        options={{
            headerShown: false,
            tabBarStyle:{
              backgroundColor:'black',
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
        name="Danh Mục"
        component={TopBar}
        options={{
            headerShown: false,
            tabBarStyle:{
              backgroundColor:'black',
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
        name="Tài Khoản"
        component={Acc}
        options={{
            headerShown: false,
            tabBarStyle:{
              backgroundColor:'black',
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
        name="Giỏ"
        component={() => <Bag cartItems={cartItems} setCartItems={setCartItems} />}
        options={({ route }) => ({
            headerShown: false,
            tabBarVisible: route.state && route.state.index === 0 ? false : true,
            tabBarStyle:{
              backgroundColor:'black',
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
        })}
      />
    </Tab.Navigator>
    );
};
export default BottomBar;