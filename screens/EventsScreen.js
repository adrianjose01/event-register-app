import React, { useContext } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
} from "react-native";
import { EventContext } from "../store/event-contex";
import Event from "../components/UI/Event";

const EventsScreen = () => {
  const { events, removeData } = useContext(EventContext);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={removeData}>
        <Text style={styles.removeButton}>Borrar todos los eventos</Text>
      </TouchableOpacity>
      <FlatList
        data={events}
        keyExtractor={(item) => item.id}
        renderItem={(item) => (
          <Event
            date={item.item.date}
            title={item.item.title}
            eventId={item.item.id}
          />
        )}
      />
    </View>
  );
};

export default EventsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 24,
  },
  removeButton: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    padding: 16,
  },
});
