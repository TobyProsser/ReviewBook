import React from "react";
import { View, Text, TextInput, Image } from "react-native";
import styles from "../styles/styles.js";

const HomePage = () => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 0.14 }}></View>
      <Text style={styles.usernameTitle}>@HereLiesToby</Text>
      <View style={{ flex: 0.05 }}></View>
      <View style={{ flexDirection: "row", gap: 20 }}>
        <View style={[styles.pillShape, styles.addShadow]}>
          <Text style={styles.pillTitle}>Tall</Text>
        </View>
        <View style={[styles.pillShape, styles.addShadow]}>
          <Text style={styles.pillTitle}>Creative</Text>
        </View>
        <View style={[styles.pillShape, styles.addShadow]}>
          <Text style={styles.pillTitle}>Shy</Text>
        </View>
      </View>
      <View style={{ flex: 0.05 }}></View>

      <View style={{ flexDirection: "row", gap: 20 }}>
        <View style={[styles.pillShape, styles.infoPill]}>
          <Text style={styles.pillTitle}>Reviews: 7</Text>
        </View>
        <View style={[styles.pillShape, styles.infoPill]}>
          <Text style={styles.pillTitle}>Written: 2</Text>
        </View>
      </View>
      <View style={{ flex: 0.08 }}></View>
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchBar} placeholder="" />
        <View style={styles.circle} />
      </View>
      <View style={{ flex: 0.1 }}></View>
      <View style={{ flexDirection: "row", gap: 20 }}>
        <View style={[styles.pillShape, styles.dropDown]}>
          <Text style={[styles.pillTitle, styles.dropDownTitle]}>Funny</Text>
        </View>
        <View style={[styles.pillShape, styles.reviewButton]}>
          <Text style={styles.pillTitle}>Review</Text>
        </View>
      </View>
      <View style={{ flex: 0.055 }}></View>
      <View style={styles.boxContainer}>
        <View style={styles.box} />
      </View>
      <Image
        style={styles.smallerImage}
        source={require("../../assets/panda/Panda2.png")}
      />
    </View>
  );
};

export default HomePage;
