import React from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import { categories, meals } from "../controller/data";
import MealItem from "../components/MealItem";

const CategoryMealScreen = ({ route, navigation }) => {
  const { catId } = route.params;
  const onSelectMeal = () => {};

  const renderMealItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        imageUrl={itemData.item.imageUrl}
        onSelectMeal={() => {
          navigation.navigate("MealDetails", {
            mealId: itemData.item.id,
            name: itemData.item.title,
          });
        }}
      />
    );
  };

  const category = categories.find((cat) => cat.id === catId);

  const filteredMeals = meals.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return (
    <View style={styles.screen}>
      <FlatList
        data={filteredMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
  },
});

export default CategoryMealScreen;
