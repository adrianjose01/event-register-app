import React, { useContext } from "react";
import { StyleSheet, Text, View, Button, Pressable } from "react-native";
import { Audio } from "expo-av";
import { Ionicons } from "@expo/vector-icons";
import { EventContext } from "../store/event-contex";

export default function AudioRecorder() {
  const [recording, setRecording] = React.useState();
  const [recordings, setRecordings] = React.useState(null);

  const { updateAudio } = useContext(EventContext);

  async function startRecording() {
    try {
      const perm = await Audio.requestPermissionsAsync();
      if (perm.status === "granted") {
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true,
        });
        const { recording } = await Audio.Recording.createAsync(
          Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
        );
        setRecording(recording);
      }
    } catch (err) {}
  }

  async function stopRecording() {
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    const { sound, status } = await recording.createNewLoadedSoundAsync();
    const newAudio = {
      sound: sound,
      duration: getDurationFormatted(status.durationMillis),
      file: recording.getURI(),
    };
    setRecordings(newAudio);
    updateAudio(newAudio);
  }

  function getDurationFormatted(milliseconds) {
    const minutes = milliseconds / 1000 / 60;
    const seconds = Math.round((minutes - Math.floor(minutes)) * 60);
    return seconds < 10
      ? `${Math.floor(minutes)}:0${seconds}`
      : `${Math.floor(minutes)}:${seconds}`;
  }

  function getRecordingLines() {
    return (
      recordings && (
        <View style={styles.row}>
          <Button
            onPress={async () => await recordings.sound.replayAsync()}
            title="Play"
          ></Button>
        </View>
      )
    );
  }

  function clearRecordings() {
    setRecordings(null);
  }

  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => pressed && styles.pressed}
        android_ripple={{ color: "#ccc" }}
        onPress={recording ? stopRecording : startRecording}
      >
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>
            {recording ? "Terminar Grabacion" : "Empezar a Grabar"}
          </Text>
          <Ionicons name="mic-outline" size={24} color="black" />
        </View>
      </Pressable>
      {getRecordingLines()}
      {recordings && (
        <Button title="Eliminar Grabacion" onPress={clearRecordings} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
    marginRight: 40,
  },
  buttonContainer: {
    gap: 10,
    alignItems: "center",
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 14,
  },
  pressed: {
    opacity: 0.5,
  },
});
