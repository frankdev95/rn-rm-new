import * as React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavouritesScreen";
import { Platform } from "react-native";
import Colors from "../assets/constants/Colors";
import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();

const MealsNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerStyle: {
          backgroundColor:
            Platform.OS === "android" ? Colors.primaryColor : Colors.white,
        },
        headerTitleStyle: {
          fontFamily: "open-sans",
          fontSize: 25,
        },
        headerTintColor:
          Platform.OS === "android" ? Colors.white : Colors.primaryColor,
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{ title: "Meal Categories" }}
      />
      <Stack.Screen
        name="CategoriesMeals"
        component={CategoryMealScreen}
        options={({ route }) => ({ title: route.params.name })}
      />
      <Stack.Screen
        name="MealDetails"
        component={MealDetailScreen}
        options={({ route }) => ({ title: route.params.name })}
      />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const IosTabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === "Meals") {
              iconName = "ios-restaurant";
            } else if (route.name === "Favorites") {
              iconName = "ios-star";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: Colors.accentColor,
        }}
      >
        <Tab.Screen name="Meals" component={MealsNavigator} />
        <Tab.Screen name="Favorites" component={FavoritesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const MaterialTab = createMaterialBottomTabNavigator();

const AndroidTabNavigator = () => {
  return (
    <NavigationContainer>
      <MaterialTab.Navigator
        initialRouteName="Meals"
        activeColor={Colors.accentColor}
        shifting={true}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            let iconName;
            if (route.name === "Meals") {
              iconName = "ios-restaurant";
            } else if (route.name === "Favorites") {
              iconName = "ios-star";
            }
            return <Ionicons name={iconName} size={22} color={color} />;
          },
          tabBarColor: Colors.primaryColor,
        })}
      >
        <MaterialTab.Screen name="Meals" component={MealsNavigator} />
        <MaterialTab.Screen name="Favorites" component={FavoritesScreen} />
      </MaterialTab.Navigator>
    </NavigationContainer>
  );
};

export default Platform.OS === "android"
  ? AndroidTabNavigator
  : IosTabNavigator;
