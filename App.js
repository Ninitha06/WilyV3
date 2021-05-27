import React, { Component } from "react";
import { Rajdhani_600SemiBold } from "@expo-google-fonts/rajdhani";
import * as Font from "expo-font";

import LoginScreen from "./screens/LoginScreen";
import BottomTabNavigator from "./components/TabNavigator";

import { createSwitchNavigator, createAppContainer } from "react-navigation";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false,
    };
  }

  async loadFonts() {
     Font.loadAsync({
      Rajdhani : Rajdhani_600SemiBold,
    })
    .then(()=>{this.setState({ fontLoaded: true });
 })
    
    
  }

  componentDidMount() {
    this.loadFonts();
  }

  render() {
    const { fontLoaded } = this.state;
    
    if (fontLoaded) {
      return <AppContainer />;
    }
    return null;
  }
}

const AppSwitchNavigator = createSwitchNavigator(
  {
    Login: {
      screen: LoginScreen,
    },
    BottomTab: {
      screen: BottomTabNavigator,
    },
  },
  {
    initialRouteName: "Login",
  }
);

const AppContainer = createAppContainer(AppSwitchNavigator);
