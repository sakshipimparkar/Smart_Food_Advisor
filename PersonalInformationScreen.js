import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import {
  Appbar,
  TextInput as PaperTextInput,
  Button,
} from "react-native-paper";

const PersonalInformationScreen = ({ navigation }) => {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@example.com");
  const [address, setAddress] = useState("123 Main St, Cityville");

  const handleSaveChanges = () => {
    // Implement logic to save changes (for now, just navigate back to MainMenuScreen)
    navigation.navigate("MainMenuScreen");
  };

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Personal Information" />
      </Appbar.Header>

      <PaperTextInput
        label="Name"
        value={name}
        onChangeText={(text) => setName(text)}
        style={styles.input}
      />

      <PaperTextInput
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
      />

      <PaperTextInput
        label="Address"
        value={address}
        onChangeText={(text) => setAddress(text)}
        style={styles.input}
      />

      {/* Additional features can be added here */}

      <Button
        mode="contained"
        style={styles.saveButton}
        onPress={handleSaveChanges}
      >
        Save Changes
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    margin: 10,
  },
  saveButton: {
    margin: 20,
    backgroundColor: "#4CAF50",
  },
});

export default PersonalInformationScreen;
