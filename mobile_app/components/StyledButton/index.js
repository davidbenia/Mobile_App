import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

const StyledButton = (props) => {
  const { type, content, onPress } = props;

  const backgroundColor = type === "primary" ? "black" : "white";
  const color = type === "primary" ? "white" : "black";

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor: backgroundColor,
          },
        ]}
        onPress={onPress}
      >
        <Text style={[styles.text, { color: color }]}>{content}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StyledButton;
