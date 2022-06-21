import React, {Component} from "react"
import{View} from "react-native"
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import CreateStory from "../screens/CreateStory";
import Feed from "../screens/Feed";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RFValue } from "react-native-responsive-fontsize";

const Tab = createMaterialBottomTabNavigator()
export default function BottomTabNav (){
return(
  
        <Tab.Navigator 
        labeled = {false}
        activeColor={"tomato"}
        inactiveColor={"white"}
        barStyle={{backgroundColor:"grey",borderTopLeftRadius:70,borderTopRightRadius:70,height:"8%",position:"absolute",
      overflow:"hidden"
      }}
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Feed') {
                iconName = focused
                  ? 'book'
                  : 'book-outline';
              } else if (route.name === 'CreateStory') {
                iconName = focused ? 'create' : 'create-outline';
              }
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={RFValue(15)} color={color} style={{width:RFValue(20),height:RFValue(20)}} />;
            },
           
          })}>

            <Tab.Screen name= "Feed" component={Feed} options = {{headerShown:false}}/>
            <Tab.Screen name="CreateStory" component={CreateStory} options={{headerShown:false}}/>
        </Tab.Navigator>
  
)
}