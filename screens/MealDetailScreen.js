import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { meals } from "../controller/data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";

const MealDetailScreen = ({ route, navigation }) => {
  const { mealId } = route.params;
  const meal = meals.find((meal) => meal.id === mealId);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item title="Favorite" iconName="ios-star" />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.screen}>
      <Text>{meal.title}</Text>
      <Button
        title="Go back to categories"
        onPress={(_) => navigation.popToTop()}
      />
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

export default MealDetailScreen;
