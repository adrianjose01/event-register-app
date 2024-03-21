import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a Springfield</Text>
      <View style={styles.image}>
        <Image style={styles.image} source={require("../assets/city.jpg")} />
      </View>
      <View>
        <Text style={styles.textContainer}>
          Esta aplicacion esta diseñada para llevar un registro de todos los
          eventos que pasen durante las elecciones de Springfield.
        </Text>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 24,
  },
  title: {
    fontSize: 24,
    padding: 12,
    fontWeight: "bold",
  },
  textContainer: {
    fontWeight: "300",
    fontSize: 22,
    padding: 12,
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 24,
    shadowColor: "black",
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
});
