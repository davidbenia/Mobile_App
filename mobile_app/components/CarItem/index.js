import React from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import StyledButton from "../StyledButton";
import styles from "./styles.js";

const CarItem = (props) => {
  const { title, subtitle, subtitleButton, image, primaryFunc, secondaryFunc } =
    props.car;

  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image}></ImageBackground>

      <View style={styles.titles}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>
          {subtitle}{" "}
          <TouchableOpacity
            style={styles.subtitle}
            onPress={() => alert("test")}
          >
            <Text style={[styles.subtitleButton, styles.subtitle]}>
              {subtitleButton}
            </Text>
          </TouchableOpacity>
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <StyledButton
          style={styles.primaryButton}
          type="primary"
          content={"Custom Order"}
          onPress={() => alert("test")}
        />
        <StyledButton
          style={styles.secondaryButton}
          type="secondary"
          content={"Existing Inventory"}
          onPress={() => alert("test")}
        />
      </View>
    </View>
  );
};

export default CarItem;
