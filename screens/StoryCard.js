import React,{Component} from "react"
import {View,Text,Image,StyleSheet} from "react-native"
import * as Font from "expo-font"
import AppLoading from "expo-app-loading";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RFValue } from "react-native-responsive-fontsize"

let CustomFont = {BubbleGumSans:require("../assets/fonts/BubblegumSans-Regular.ttf")}

export default class StoryCard extends React.Component{
    constructor(props){
        super(props)
        this.state= {
fontLoaded:false
        }
    }
    LoadingFont = async() =>{
await Font.loadAsync(CustomFont)
this.setState({fontLoaded:true})
    }

   
    componentDidMount(){
        this.LoadingFont()
    }
render(){
   
    if(!this.state.fontLoaded){
        return <AppLoading/>
    }
    else{
    return(
        <View>
        <View>
           <Image style={styles.storyImg} source={require("../assets/story_image_1.png")}/>
           </View>
        </View>
    )
}
}

}
const styles = StyleSheet.create({
 storyImg :{
   resizeMode:"contain",
   alignSelf:"center",
   width:"85%"
 } 
})