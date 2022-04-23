import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createAppContainer } from "react-navigation";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import ProfileScreen from "./ProfileScreen.js";
import TextScreen from "./TextScreen";
import VideoScreen from "./VideoScreen";
 
const TabNavigator = createMaterialTopTabNavigator(
  {
    //code for the pages
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarLabel: "Profile",
        tabBarIcon: (tabInfo) => (
          <Ionicons
            name="ios-person-circle-outline"
            size={tabInfo.focused ? 25 : 20}
            color={tabInfo.tintColor}
          />
        ),
      },
    },
    TextS: {
      screen: TextScreen,
      navigationOptions: {
        tabBarLabel: "Text",
        tabBarIcon: (tabInfo) => (
          <Ionicons
            name="text"
            size={tabInfo.focused ? 24 : 20}
            color={tabInfo.tintColor}
          />
        ),
      },
    },
    Video: {
      screen: VideoScreen,
      navigationOptions: {
        tabBarLabel: "Videos",
        tabBarIcon: (tabInfo) => (
          <Ionicons
            name="ios-videocam-outline"
            size={tabInfo.focused ? 25 : 20}
            color={tabInfo.tintColor}
          />
        ),
      },
    },
  },
  {
    //code for the top
    tabBarOptions: {
      showIcon: true,
      style: {
        backgroundColor: "#006600",
      },
    },
    tabBarPosition: 'bottom',
  }
 );
  const Navigator = createAppContainer(TabNavigator);
  export default function App() {
  return (
    <Navigator>
      <ProfileScreen />
    </Navigator>
  );
 }
 