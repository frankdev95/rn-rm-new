import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  StyleSheet,
  Platform,
  Image,
} from "react-native";
import Colors from "../assets/constants/Colors";

const CategoryGridItem = (props) => {
  let TouchableComponent =
    Platform.OS == "android" && Platform.Version >= 21
      ? TouchableNativeFeedback
      : TouchableOpacity;

  return (
    <View style={styles.gridItem}>
      <TouchableComponent style={{ flex: 1 }} onPress={props.onSelect}>
        <View style={{ ...styles.container }}>
          <Image style={styles.image} source={props.src} />
          <Text style={styles.title} numberOfLines={2}>
            {props.title}
          </Text>
        </View>
      </TouchableComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    height: 160,
    margin: 15,
  },
  container: {
    backgroundColor: "#f3f4ed",
    borderWidth: 2,
    borderColor: "#f8ede3",
    flex: 1,
    alignItems: "center",
    borderRadius: 10,
    padding: 10,
    elevation: 10,
  },
  title: {
    color: Colors.black,
    fontFamily: "open-sans",
    fontSize: 20,
    textAlign: "center",
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
});

export default CategoryGridItem;
