import React from "react";
import { View, Text, TextInput, Image } from "react-native";
import styles from "../styles/styles.js";

const redColor = "#D32714";
const tanColor = "#FFC89B";

const ArrowButton = ({ upArrow }) => {
  return (
    <View
      style={[
        styles.circleButton,
        styles.addShadow,
        { transform: [{ rotate: upArrow ? "0deg " : "180deg" }] },
      ]}
    >
      <View
        style={[
          styles.arrowButtonLine,
          styles.addShadow,
          {
            backgroundColor: upArrow ? tanColor : redColor,
            left: 22.5,
            transform: [{ rotate: "45deg" }],
          },
        ]}
      />
      <View
        style={[
          styles.arrowButtonLine,
          styles.addShadow,
          {
            backgroundColor: upArrow ? tanColor : redColor,
            right: 22.5,
            transform: [{ rotate: "315deg" }],
          },
        ]}
      />
    </View>
  );
};

export default ArrowButton;
