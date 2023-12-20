import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Button, TextInput as PaperTextInput, Text } from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";
import { TouchableWithoutFeedback } from "react-native";

const AdditionalDetailsScreen = ({ navigation }) => {
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const [ageError, setAgeError] = useState(false);
  const [heightError, setHeightError] = useState(false);
  const [weightError, setWeightError] = useState(false);

  const handleSaveDetails = () => {
    // Validate age, height, and weight
    const ageRegex = /^\d+$/;
    const heightRegex = /^\d+$/;
    const weightRegex = /^\d+$/;

    setAgeError(!ageRegex.test(age) || parseInt(age) <= 0);
    setHeightError(!heightRegex.test(height) || parseInt(height) <= 0);
    setWeightError(!weightRegex.test(weight) || parseInt(weight) <= 0);

    // If all inputs are correct, save details
    if (!ageError && !heightError && !weightError) {
      // Implement logic to save details
      console.log("Details saved:", { age, height, weight, dateOfBirth });
      // Navigate to the ProfilePhoto screen
      navigation.navigate("ProfilePhoto");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Additional Details</Text>

      <PaperTextInput
        style={styles.input}
        label="Age"
        keyboardType="numeric"
        value={age}
        onChangeText={(text) => setAge(text)}
        error={ageError}
      />

      <PaperTextInput
        style={styles.input}
        label="Height (cm)"
        keyboardType="numeric"
        value={height}
        onChangeText={(text) => setHeight(text)}
        error={heightError}
      />

      <PaperTextInput
        style={styles.input}
        label="Weight (kg)"
        keyboardType="numeric"
        value={weight}
        onChangeText={(text) => setWeight(text)}
        error={weightError}
      />

      <TouchableWithoutFeedback
        style={styles.datePickerContainer}
        onPress={() => setShowDatePicker(true)}
      >
        <Text style={styles.datePickerText}>
          Date of Birth: {dateOfBirth.toDateString()}
        </Text>
      </TouchableWithoutFeedback>

      {showDatePicker && (
        <DateTimePicker
          value={dateOfBirth}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            if (selectedDate) {
              setDateOfBirth(selectedDate);
            }
            setShowDatePicker(false); // Close the date picker
          }}
        />
      )}

      <Button
        style={styles.saveButton}
        mode="contained"
        onPress={handleSaveDetails}
      >
        Save Details
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: 30,
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    marginBottom: 15,
  },
  datePickerContainer: {
    marginBottom: 15,
  },
  datePickerText: {
    fontSize: 16,
  },
  saveButton: {
    marginTop: 20,
    borderRadius: 10,
  },
});

export default AdditionalDetailsScreen;
