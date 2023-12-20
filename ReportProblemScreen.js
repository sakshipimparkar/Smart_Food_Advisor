import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Button, TextInput as PaperInput } from "react-native-paper";

const ReportProblemScreen = ({ navigation }) => {
  const [problemDescription, setProblemDescription] = useState("");

  const handleSendReport = () => {
    // Implement logic to send problem report (you can customize this)
    console.log("Problem report submitted:", problemDescription);

    // For now, let's navigate back to the MainMenuScreen after submitting the report
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Report a Problem</Text>

      <PaperInput
        style={styles.problemInput}
        label="Describe the problem..."
        multiline
        numberOfLines={5}
        value={problemDescription}
        onChangeText={(text) => setProblemDescription(text)}
      />

      <Button
        style={styles.sendButton}
        mode="contained"
        onPress={handleSendReport}
      >
        Send Report
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  problemInput: {
    marginBottom: 20,
    fontSize: 16,
    height: 150,
  },
  sendButton: {
    backgroundColor: "#FF6347", // Tomato color for a warning or error theme
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 10,
  },
});

export default ReportProblemScreen;
