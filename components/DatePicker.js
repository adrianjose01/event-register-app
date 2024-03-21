import React, { useContext, useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { EventContext } from "../store/event-contex";

const DatePicker = () => {
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date());

  const { updateDate } = useContext(EventContext);

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
    updateDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatePicker = () => {
    showMode("date");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={showDatePicker}>
        <Text style={styles.label}>Selecciona la fecha</Text>
      </TouchableOpacity>
      {show && (
        <DateTimePicker value={date} mode={mode} onChange={onChangeDate} />
      )}
      <Text style={styles.date}>{date.toDateString()}</Text>
    </View>
  );
};

export default DatePicker;

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    paddingBottom: 16,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 8,
  },
  date: {
    fontWeight: "300",
    marginBottom: 8,
  },
});
