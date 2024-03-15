import React from "react";
import { View, Text, TextInput, Image } from "react-native";
import styles from "../styles/styles";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const HomePage = () => {
  const nav = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <View style={styles.container}>
      <View style={{ flex: 0.14 }}></View>
      <Text style={styles.title}>Review</Text>
      <Text style={[styles.title, styles.secondTitle]}>Book</Text>
      <View style={{ flex: 0.1 }}></View>
      <View
        style={styles.searchContainer}
        onTouchStart={() => {
          nav.replace("ProfilePage");
        }}
      >
        <TextInput
          onChange={() => {
            nav.replace("ProfilePage");
          }}
          style={styles.searchBar}
          placeholder=""
        />
        <View style={styles.circle} />
      </View>
      <View style={{ flex: 0.055 }}></View>
      <View style={styles.boxContainer}>
        <View
          style={styles.box}
          onTouchStart={() => {
            console.log("tap");
            nav.replace("ProfilePage");
          }}
        />
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
