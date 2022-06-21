import React from "react";
import {Text,View,SafeAreaView, Platform,Image,StatusBar} from "react-native"
import{FlatList}from "react-native-gesture-handler"
import * as Font from "expo-font"
import AppLoading from "expo-app-loading";
import StoryCard from "./StoryCard"
let stories = require("../temp_stories.json")

var CustomFont = {BubbleGumSans:require("../assets/fonts/BubblegumSans-Regular.ttf")}

export default class Feed extends React.Component{
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

    keyExtractor = (item,index)=>{
      index.toString()
    }

    renderItem = ({item:story})=>{
      return <StoryCard/>
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
            <SafeAreaView style={{marginTop:Platform.OS==="android" ? StatusBar.currentHeight:0}} />
            <Image source={require("../assets/logo.png")}/>
        <View style={{justifyContent:"center"}}>
                <Text>feed Screen</Text>
        </View>
<View>
<FlatList 
keyExtractor = {this.keyExtractor}
data={stories}
renderItem = {this.renderItem}
/>
</View>
        </View>
    )
}
}

}