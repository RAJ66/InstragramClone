import React from "react";
import { Image, TouchableOpacity, Alert } from "react-native";
import { createAppContainer, createStackNavigator } from "react-navigation";

import Feed from "./pages/Feed";

import logo from "./assets/instagram.png";

export default createAppContainer(
  createStackNavigator(
    {
      Feed
    },
    {
      headerLayoutPreset: "center",
      defaultNavigationOptions: {
        headerTitle: (
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={alert("Image Clicked!!!")}
          >
            <Image source={logo} />
          </TouchableOpacity>
        ),
        headerStyle: {
          backgroundColor: "#f5f5f5"
        }
      }
    }
  )
);
