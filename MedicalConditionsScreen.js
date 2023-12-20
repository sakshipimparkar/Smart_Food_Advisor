import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import {
  TextInput,
  Button,
  Title,
  Paragraph,
  Appbar,
  IconButton,
  Card,
} from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const MedicalConditionsScreen = ({ navigation }) => {
  const [medicalConditions, setMedicalConditions] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");

  const handleSaveAndContinue = () => {
    // Implement logic to save medical conditions and notes
    // For now, let's just navigate to the Homepage
    navigation.navigate("HomePage");
  };

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.appBar}>
        <IconButton
          icon={() => <Icon name="arrow-left" size={25} color="white" />}
          onPress={() => navigation.goBack()}
        />
        <Appbar.Content title="Medical Conditions" />
      </Appbar.Header>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Card style={styles.card}>
          <Card.Content>
            <Title style={styles.title}>Your Health Matters</Title>

            <Paragraph style={styles.description}>
              Share your medical conditions and notes for a personalized
              experience.
            </Paragraph>

            <TextInput
              label="Medical Conditions"
              value={medicalConditions}
              onChangeText={(text) => setMedicalConditions(text)}
              style={styles.input}
              mode="outlined"
              theme={{ colors: { primary: "#007BFF" } }}
            />

            <TextInput
              label="Additional Notes"
              multiline
              numberOfLines={4}
              value={additionalNotes}
              onChangeText={(text) => setAdditionalNotes(text)}
              style={styles.input}
              mode="outlined"
              theme={{ colors: { primary: "#007BFF" } }}
            />

            <Button
              mode="contained"
              onPress={handleSaveAndContinue}
              style={styles.continueButton}
              labelStyle={styles.buttonText}
              theme={{ colors: { primary: "#007BFF" } }}
            >
              Save and Continue
            </Button>
          </Card.Content>
        </Card>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  appBar: {
    backgroundColor: "#8BC34A",
  },
  contentContainer: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
    justifyContent: "center",
  },
  card: {
    borderRadius: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    color: "#555",
    textAlign: "center",
  },
  input: {
    marginBottom: 20,
    fontSize: 16,
  },
  continueButton: {
    backgroundColor: "#8BC34A",
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});

export default MedicalConditionsScreen;
