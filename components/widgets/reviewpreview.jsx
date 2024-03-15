import React from "react";
import { View, Text, TextInput, Image } from "react-native";
import styles from "../styles/styles.js";

import Star from "./star";
import ArrowButton from "./arrowbutton";

const ReviewPreviewContainer = () => {
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <View style={styles.reviewPreviewContainer}>
        <View style={styles.previewTagContainer}>
          <Text style={[styles.pillTitle, styles.previewTagTitle]}>Funny</Text>
        </View>
        <View style={styles.previewTextColumn}>
          <Text style={[styles.pillTitle, styles.previewColumnTitle]}>
            Info:
          </Text>
          <Text style={styles.previewColumnText}>Relationship:</Text>
          <Text style={styles.previewColumnText}>Time Known:</Text>
          <Text style={styles.previewColumnText}>Last Interaction:</Text>
        </View>
        <View style={{ flex: 0.5 }} />
        <View style={{ flexDirection: "row", gap: 15 }}>
          <View style={[styles.pillShape]}>
            <Text style={[styles.pillTitle, styles.previewPillTitle]}>
              Tall
            </Text>
          </View>
          <View style={[styles.pillShape]}>
            <Text style={[styles.pillTitle, styles.previewPillTitle]}>
              Creative
            </Text>
          </View>
          <View style={[styles.pillShape]}>
            <Text style={[styles.pillTitle, styles.previewPillTitle]}>Shy</Text>
          </View>
        </View>
        <View style={{ flex: 0.2 }} />
        <View
          style={{
            width: "100%",
            flexDirection: "row-reverse",
            right: 20,
          }}
        >
          <Star />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          gap: 20,
          alignSelf: "flex-end",
          marginHorizontal: 40,
          top: 20,
        }}
      >
        <ArrowButton upArrow={false} />
        <ArrowButton upArrow={true} />
      </View>
    </View>
  );
};

export default ReviewPreviewContainer;
