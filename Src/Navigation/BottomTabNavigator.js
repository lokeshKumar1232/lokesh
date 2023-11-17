import React from "react";
import {View,Image,StyleSheet} from "react-native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from "../Screen/Home"
import Profile from "../Screen/Profile"
import Search from "../Screen/Search"
import Setting from "../Screen/Setting"
import Booking from "../Screen/Booking"
const BottomTabNavigator = () =>  {

const Tab = createBottomTabNavigator();
  return (
    <View style={[styles.container]}>
<NavigationContainer>
 <Tab.Navigator
 initialroutename={Home}
 screenOptions={{
    tabBarShowLabel: false,
    headerShown: false,
    tabBarStyle:styles.tabBarStyle,
     }}
   >
      <Tab.Screen name="Home" component={Home}
      options={{
        tabBarIcon: ({focused}) => (
          <View>
            <Image
              source={require('../Asset/HomeIcon.png')}
              style={[styles.imageStyle]}
            />
          </View>
        ),
      }}
      />
      <Tab.Screen name="Profile" component={Profile} 
      options={{
        tabBarIcon: ({focused}) => (
          <View>
            <Image
              source={require('../Asset/Second.png')}
              style={[styles.imageStyle]}
            />
          </View>
        ),
      }}
      />
      <Tab.Screen name="Search" component={Search}
      options={{
        tabBarIcon: ({focused}) => (
          <View>
            <Image
              source={require('../Asset/navicon-1.png')}
              style={[styles.imageStyle]}
            />
          </View>
        ),
      }}
      />
      <Tab.Screen name="Setting" component={Setting} 
      options={{
        tabBarIcon: ({focused}) => (
          <View>
            <Image
              source={require('../Asset/third.png')}
              style={[styles.imageStyle]}
            />
          </View>
        ),
      }}
      />
      <Tab.Screen name="Booking" component={Booking}
      
      options={{
        
        tabBarIcon: ({focused}) => (
          <View>
            <Image
              source={require('../Asset/Lock.png')}
              style={[styles.imageStyle]}
            />
          </View>
        ),
      }}/>
      
    </Tab.Navigator>
    </NavigationContainer>
    </View>
    
   
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-end',
      backgroundColor: '#ffffff',
    },
    tabBarStyle: {
      backgroundColor: '#721F0D',
      height: 60,
      paddingHorizontal: 20,
    },
    imageStyle: {
      width: 24,
      height: 24,
      resizeMode: 'contain',
      tintColor:'white'
    },
  });
export default BottomTabNavigator