import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

export const EventContext = createContext();

export function EventProvider({ children }) {
  const [events, updateEvents] = useState([]);
  const [title, updateTitle] = useState();
  const [description, updateDescription] = useState();
  const [image, updateImage] = useState();
  const [date, updateDate] = useState();
  const [audio, updateAudio] = useState();
  const [isUpdating, setIsUpdating] = useState(true);

  useEffect(() => {
    if (isUpdating) {
      getData();
      setIsUpdating(false);
    }
  }, [isUpdating]);

  async function onSave() {
    const newEvent = {
      id: Math.random().toString(),
      title,
      description,
      image,
      date,
      audio,
    };
    await AsyncStorage.setItem(
      "eventos",
      JSON.stringify([newEvent, ...events])
    );
    updateEvents((prevEvents) => [newEvent, ...prevEvents]);
    setIsUpdating(true);
    updateTitle("");
    updateDescription("");
    updateImage(null);
  }

  async function getData() {
    const eventos = await AsyncStorage.getItem("eventos");
    if (!eventos) return updateEvents([]);
    updateEvents(JSON.parse(eventos));
  }

  async function removeData() {
    try {
      await AsyncStorage.removeItem("eventos");
      updateEvents([]);
      setIsUpdating(true);
    } catch (err) {
      Alert.alert("Algo Salio mal");
    }
  }

  const value = {
    updateTitle,
    updateDescription,
    onSave,
    updateImage,
    updateDate,
    updateAudio,
    events,
    removeData,
    title,
    description,
    image,
  };
  return (
    <EventContext.Provider value={value}>{children}</EventContext.Provider>
  );
}
