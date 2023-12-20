import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Button, TextInput as PaperInput } from "react-native-paper";

const FeedbackScreen = ({ navigation }) => {
  const [feedback, setFeedback] = useState("");

  const handleSendFeedback = () => {
    // Implement logic to send feedback (you can customize this)
    console.log("Feedback submitted:", feedback);

    // For now, let's navigate back to the MainMenuScreen after submitting feedback
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Feedback</Text>

      <PaperInput
        style={styles.feedbackInput}
        label="Enter your feedback..."
        multiline
        numberOfLines={5}
        value={feedback}
        onChangeText={(text) => setFeedback(text)}
      />

      <Button
        style={styles.sendButton}
        mode="contained"
        onPress={handleSendFeedback}
      >
        Send Feedback
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
  feedbackInput: {
    marginBottom: 20,
    fontSize: 16,
    height: 150,
  },
  sendButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 10,
  },
});

export default FeedbackScreen;
