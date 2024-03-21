import React from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";

const PrimaryButton = ({ children, onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => pressed && styles.pressed}
      android_ripple={{ color: "#ccc" }}
      onPress={onPress}
    >
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#eecf02",
    padding: 18,
    borderRadius: 8,
  },
  buttonText: {
    fontWeight: "bold",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.5,
  },
});
