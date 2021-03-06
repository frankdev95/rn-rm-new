import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FavouritesScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>The Favourites Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FavouritesScreen;
