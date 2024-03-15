import React from "react";
import { View, Text, TextInput, Image } from "react-native";
import styles from "../styles/styles.js";

const Star = () => {
  return (
    <View style={styles.starContainer}>
      <View
        style={[
          styles.starLine,
          {
            transform: [{ rotate: "30deg" }],
          },
        ]}
      />
      <View
        style={[
          styles.starLine,
          {
            transform: [{ rotate: "90deg" }],
          },
        ]}
      />
      <View
        style={[
          styles.starLine,
          {
            transform: [{ rotate: "130deg" }],
          },
        ]}
      />
    </View>
  );
};

export default Star;
