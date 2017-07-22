// Import a libraries for making a component
import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button, Spinner, CardSection } from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm'

//Make Component (in this case is a dynamic component)
class App extends Component {
  state = { loggedIn: null };

  componentWillMount(){
    firebase.initializeApp({
     apiKey: "AIzaSyDWOdciAbL3w2qhhhHQXhdbqF61klAIztk",
     authDomain: "auth-e1ce0.firebaseapp.com",
     databaseURL: "https://auth-e1ce0.firebaseio.com",
     projectId: "auth-e1ce0",
     storageBucket: "auth-e1ce0.appspot.com",
     messagingSenderId: "702700104080"
   });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState ({ loggedIn: true});
      } else {
        this.setState ({ loggedIn: false});
      }
    });
  }

 renderContent() {
  switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />
  }
}

render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

//Make the components available to other parts of the app
export default App;
