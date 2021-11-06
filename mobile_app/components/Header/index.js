import React from "react";
import { Image, Touchable, TouchableOpacity, View } from "react-native";
import styles from "./styles";

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => alert("test")}>
        <Image
          style={styles.logo}
          source={require("../../assets/images/logo.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => alert("test")}>
        <Image
          style={styles.menu}
          source={require("../../assets/images/menu.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
