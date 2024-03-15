import React from "react";
import { View, Text, TextInput, Image } from "react-native";
import styles from "../styles/styles.js";

const ArrowButton = () => {
  return (
    <View style={[styles.circleButton, styles.addShadow]}>
      <View
        style={[
          styles.xButtonLine,
          styles.addShadow,
          { transform: [{ rotate: "45deg" }] },
        ]}
      />
      <View
        style={[
          styles.xButtonLine,
          styles.addShadow,
          { transform: [{ rotate: "315deg" }] },
        ]}
      />
    </View>
  );
};

export default ArrowButton;
