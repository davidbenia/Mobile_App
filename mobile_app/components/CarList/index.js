import React from "react";
import { Text, View, FlatList, Dimensions } from "react-native";
import styles from "./styles";
import cars from "./cars";
import CarItem from "../CarItem";

const CarList = () => {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={cars}
        renderItem={({ item }) => <CarItem car={item} />}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
        showsVerticalScrollingIndicator={false}
      />
    </View>
  );
};

export default CarList;
