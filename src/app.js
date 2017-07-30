import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import LoginComponent from './components/loginComponent';
import SingUpComponent from './components/singUpComponent';
import HomeComponent from './components/homeComponent';
import AlbumViewComponent from './components/albumViewComponent';

const App = StackNavigator({
  Login: { screen: LoginComponent, navigationOptions: { header: null }},  
  Home: { screen : HomeComponent, navigationOptions: { title: "Top Albums" }},
  Singup: { screen: SingUpComponent, navigationOptions: { header: null }},
  AlbumView: { screen: AlbumViewComponent, navigationOptions: { title: "" }}
});

export default App;