import React from "react";
import { StyleSheet, FlatList } from "react-native";
import { categories } from "../controller/data";
import CategoryGridItem from "../components/CategoryGridItem";

const CategoriesScreen = ({ navigation }) => {
  const renderGridItem = (itemData) => (
    <CategoryGridItem
      title={itemData.item.title}
      src={itemData.item.src}
      onSelect={(_) =>
        navigation.navigate("CategoriesMeals", {
          catId: itemData.item.id,
          name: itemData.item.title,
        })
      }
    />
  );

  return (
    <FlatList data={categories} renderItem={renderGridItem} numColumns={2} />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CategoriesScreen;
