import React, { useContext } from "react";
import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";
import PrimaryButton from "../components/UI/PrimaryButton";
import DatePicker from "../components/DatePicker";
import UploadImage from "../components/UploadImage";
import AudioRecorder from "../components/AudioRecorder";
import { EventContext } from "../store/event-contex";

const EventsRegisterScreen = ({ navigation }) => {
  const { updateTitle, updateDescription, onSave, title, description } =
    useContext(EventContext);

  function onSubmitHandler() {
    onSave();
    navigation.navigate("Eventos");
  }

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Titulo de Evento</Text>
        <TextInput
          style={styles.input}
          placeholder="Escribe el titulo aqui..."
          onChangeText={(enteredText) => updateTitle(enteredText)}
          value={title}
        />
        <Text style={styles.label}>Descripcion de Evento</Text>
        <TextInput
          style={styles.input}
          placeholder="Escribe la descripcion aqui..."
          onChangeText={(enteredText) => updateDescription(enteredText)}
          value={description}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <AudioRecorder />
          <DatePicker />
        </View>
        <UploadImage />
        <PrimaryButton onPress={onSubmitHandler}>Guardar</PrimaryButton>
      </View>
    </View>
  );
};

export default EventsRegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "strecth",
  },
  formContainer: {
    flex: 1,
    width: "100%",
    padding: 24,
  },
  input: {
    backgroundColor: "#f4f4f5",
    height: 45,
    marginTop: 8,
    marginBottom: 24,
    borderRadius: 8,
    padding: 8,
    fontSize: 16,
  },
  label: {
    fontWeight: "bold",
  },
});
