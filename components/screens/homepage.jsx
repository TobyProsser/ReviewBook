import React from "react";
import { View, Text, TextInput, Image } from "react-native";
import styles from "../styles/styles.js";

const HomePage = () => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 0.14 }}></View>
      <Text style={styles.title}>Review</Text>
      <Text style={[styles.title, styles.secondTitle]}>Book</Text>
      <View style={{ flex: 0.1 }}></View>
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchBar} placeholder="" />
        <View style={styles.circle} />
      </View>
      <View style={{ flex: 0.055 }}></View>
      <View style={styles.boxContainer}>
        <View style={styles.box} />
        <View style={styles.innerBox} />
        <View style={styles.boxTextWrapper}>
          <Text style={styles.innerBoxText}>Top</Text>
          <Text style={[styles.innerBoxText, styles.innerBoxTextBottom]}>
            Reviews
          </Text>
        </View>
      </View>
      <Image
        style={styles.image}
        source={require("../../assets/panda/Panda1.png")}
      />
    </View>
  );
};

export default HomePage;
