import React, {Component} from "react"
import{View} from "react-native"
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from "@react-navigation/native";
import Profile from "../screens/Profile";
import Home from "../screens/Home";
import BottomTabNav from "./BottomTabNav";

const Drawer = createDrawerNavigator();

const  DrawerNav = ()=>{
return(
  
        <Drawer.Navigator useLegacyImplementation>
         
            <Drawer.Screen name="Home" component={BottomTabNav} />
            <Drawer.Screen name= "Profile" component={Profile} />
        </Drawer.Navigator>
)  
}
export default DrawerNav