import { useContext } from "react";
import { View, Text, Image, StyleSheet, Button, Alert } from "react-native";
import { EventContext } from "../store/event-contex";
import PrimaryButton from "../components/UI/PrimaryButton";
import { Audio } from "expo-av";

const EventDetailsScreen = ({ route, navigation }) => {
  const { eventId } = route.params;
  const { events } = useContext(EventContext);
  const currentEvent = events.find((e) => e.id === eventId);

  async function handlePlaySound() {
    try {
      const { sound } = await Audio.Sound.createAsync({
        uri: currentEvent.audio.file,
      });
      await sound.playAsync();
    } catch (err) {
      Alert.alert("Algo salio mal!");
    }
  }

  function onBackToEvents() {
    navigation.navigate("Eventos");
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { textAlign: "center" }]}>
        {currentEvent.title}
      </Text>
      <Text style={styles.description}>{currentEvent.description}</Text>
      <Text style={styles.title}>
        {new Date(currentEvent.date).toLocaleDateString()}
      </Text>
      <Button onPress={() => handlePlaySound()} title="Play"></Button>
      <Image style={styles.img} source={{ uri: currentEvent.image }} />
      <PrimaryButton onPress={onBackToEvents}>Regresar</PrimaryButton>
    </View>
  );
};

export default EventDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 24,
    gap: 16,
  },
  img: {
    height: 200,
    width: 200,
    borderRadius: 16,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  description: {
    fontWeight: "300",
    fontSize: 20,
  },
});
