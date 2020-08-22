import React from 'react'; 
import { StyleSheet, Text, View ,TextInput,Image} from 'react-native'; 

import AppHeader from '../Screens/AppHeader'

export default class ReadStoriesScreen extends React.Component{
    render(){
        return(
            <View style={{backgroundColor:"rgb(230,100,250)",height:700}}>
            <AppHeader/>
            <Text style={styls.text}>Search theStories</Text>
            <TextInput style={styls.textInput}/>
            <Text style={styls.text}>See the Books of All kinds of stories - 
            science fiction, fiction, non fiction any time </Text>
           
            </View>
        )
    }
}

const styls = StyleSheet.create({
     textInput:{
      borderWidth:4,
      borderRadius:2,
      width:450,
      height:50,
      marginTop:20,
      marginLeft:450
    },

    text:{
         fontSize:22,
         textAlign:"center",
         marginTop:180,
    },
     
  
   logo1:{
       marginLeft:200,
       marginTop:-470,
       width:100,
       height:100,
       borderWidth:1,
      borderRadius:100,
   }
})