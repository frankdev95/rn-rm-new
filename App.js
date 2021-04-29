import { StatusBar } from "expo-status-bar";
import { enableScreens } from "react-native-screens";
import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useState } from "react";
import { StyleSheet, TabBarIOS, Text, View } from "react-native";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import CategoriesScreen from "./screens/CategoriesScreen";
import CategoryMealsScreen from "./screens/CategoryMealScreen";

import MealsNavigator from "./navigation/MealsNavigator";

enableScreens();

const Tab = createBottomTabNavigator();

const fetchFonts = async (_) => {
  await Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded)
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={(_) => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );

  return <MealsNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
