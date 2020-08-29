import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import SignUpScreen from './screens/SignUpScreen';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';

export default class App extends React.Component {
  render(){
    return (
      <View style={styles.container}>
       <AppContainer/>
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});

var SwitchNavigator = createSwitchNavigator({
  WelcomeScreen:WelcomeScreen,
  SignUpScreen:SignUpScreen
})

const AppContainer = createAppContainer(SwitchNavigator);
