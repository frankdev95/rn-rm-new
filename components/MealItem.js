import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  ImageBackground,
} from "react-native";
import Colors from "../assets/constants/Colors";

const MealItem = (props) => {
  let TouchableComponent =
    Platform.OS === "android" && Platform.Version >= 21
      ? TouchableNativeFeedback
      : TouchableOpacity;

  return (
    <View style={styles.container}>
      <TouchableComponent onPress={props.onSelectMeal}>
        <View style={{ height: "100%" }}>
          <View style={{ ...styles.row, ...styles.header }}>
            <ImageBackground
              source={{ uri: props.imageUrl }}
              style={styles.bgImage}
            >
              <View style={styles.titleContainer}>
                <Text style={styles.title}>{props.title}</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.row, ...styles.content }}>
            <Text>{props.duration}</Text>
            <Text>{props.complexity.toUpperCase()}</Text>
            <Text>{props.affordability.toUpperCase()}</Text>
          </View>
        </View>
      </TouchableComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: "#ccc",
    height: 200,
    marginBottom: 10,
    overflow: "hidden",
  },
  row: {
    flexDirection: "row",
  },
  header: {
    height: 170,
  },
  titleContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  title: {
    color: Colors.white,
    fontSize: 20,
    fontFamily: "open-sans-bold",
    textAlign: "center",
  },
  content: {
    backgroundColor: "#dddddd",
    paddingHorizontal: 10,
    height: 30,
    justifyContent: "space-between",
    alignItems: "center",
  },
  bgImage: {
    justifyContent: "flex-end",
    width: "100%",
    height: "100%",
  },
});

export default MealItem;
