import React from "react"

import { StyleSheet, Text, View } from 'react-native';
import BottomTabNav from './Navigation/BottomTabNav'; 
import DrawerNav from './Navigation/DrawerNav';
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
   
     <NavigationContainer>
     <DrawerNav/>
     
     </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
