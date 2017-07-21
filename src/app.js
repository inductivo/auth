// Import a libraries for making a component
import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm'

//Make Component (in this case is a dynamic component)
class App extends Component {
  componentWillMount(){
    firebase.initializeApp({
     apiKey: "AIzaSyDWOdciAbL3w2qhhhHQXhdbqF61klAIztk",
     authDomain: "auth-e1ce0.firebaseapp.com",
     databaseURL: "https://auth-e1ce0.firebaseio.com",
     projectId: "auth-e1ce0",
     storageBucket: "auth-e1ce0.appspot.com",
     messagingSenderId: "702700104080"
   });
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication"></Header>
        <LoginForm />
      </View>
    );
  }
}

//Make the components available to other parts of the app
export default App;
