import React, { useContext, useState } from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";
import { EventContext } from "../store/event-contex";

const UploadImage = () => {
  const { updateImage, image } = useContext(EventContext);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      updateImage(result.assets[0].uri);
    }
  };

  return (
    <>
      <Pressable
        style={({ pressed }) => pressed && styles.pressed}
        android_ripple={{ color: "#ccc" }}
        onPress={pickImage}
      >
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Escoger Imagen</Text>
          <Ionicons name="images-outline" size={24} color="black" />
        </View>
      </Pressable>
      {image && (
        <Image
          source={{ uri: image }}
          style={{ width: 150, height: 150, marginBottom: 24 }}
        />
      )}
    </>
  );
};

export default UploadImage;

const styles = StyleSheet.create({
  buttonContainer: {
    paddingVertical: 18,
    flexDirection: "row",
    gap: 10,
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 14,
  },
  pressed: {
    opacity: 0.5,
  },
});
