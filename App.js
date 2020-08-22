import React from 'react'; 
import { StyleSheet, Text, View,Image } from 'react-native'; 
import { createAppContainer } from 'react-navigation'; 
import { createBottomTabNavigator } from 'react-navigation-tabs'; 

import ReadStoriesScreens from './Screens/ReadStoriesScreen';
import WriteStoriesScreens from './Screens/WriteStoriesScreen';

export default class App extends React.Component { 
  render(){ 
  return ( 
  
    <AppContainer/>
    
  ); 
  } } 

  const TabNavigator = createBottomTabNavigator({ 
    WriteStories: {screen:  WriteStoriesScreens }, 
    ReadStories: {screen: ReadStoriesScreens}, 
    },
    {
    defaultNavigationOptions:({navigation})=>({
      tabBarIcon:()=>{
        const routeName = navigation.state.routeName
        if(routeName==="ReadStories"){
             return (
               <Image style={{
                 width:40,
                 height:40,
               }} source={require('./assets/read.png')}/>
             )
           }else if(routeName==="WriteStories"){
             return(

               <Image style={{
                 width:40,
                 height:40,
               }} source={require('./assets/write.png')}/>
             )
             
           }
      }
    })
}); 

    const AppContainer = createAppContainer(TabNavigator);
 