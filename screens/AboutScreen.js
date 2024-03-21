import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/city.jpg")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.imageBackground}
      >
        <View style={[styles.image, { width: 300 }]}>
          <Image style={styles.image} source={require("../assets/photo.jpg")} />
        </View>
        <Text style={styles.title}>Adrian de Jesus</Text>
        <Text style={styles.textContainer}>Matricula: 2022-0241</Text>
        <Text style={styles.textContainer}>
          "Elegir bien en política es como seleccionar un buen vino: requiere
          paciencia, conocimiento y la capacidad de discernir entre la
          apariencia y la calidad real."
        </Text>
      </ImageBackground>
    </View>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  rootScreen: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageBackground: { opacity: 0.25 },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 24,
    shadowColor: "black",
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  title: {
    fontSize: 24,
    padding: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
  textContainer: {
    fontWeight: "300",
    fontSize: 22,
    padding: 12,
    textAlign: "center",
  },
});
