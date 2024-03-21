import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const Event = ({ date, title, eventId }) => {
  const navigation = useNavigation();

  function onPressEvent() {
    navigation.navigate("details", {
      eventId,
    });
  }

  return (
    <TouchableOpacity onPress={onPressEvent}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text>{new Date(date).toLocaleDateString()}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Event;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eecf02",
    padding: 24,
    borderRadius: 12,
    marginVertical: 8,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 8,
    fontSize: 20,
  },
});
