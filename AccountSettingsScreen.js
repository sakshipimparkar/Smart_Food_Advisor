import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Switch, Appbar, Title } from "react-native-paper";

const AccountSettingsScreen = ({ navigation }) => {
  const [receiveNotifications, setReceiveNotifications] = useState(true);

  const handleSaveChanges = () => {
    // Implement logic to save changes
    // For now, let's just navigate back to the MainMenuScreen
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Account Settings" />
      </Appbar.Header>

      <View style={styles.settingItem}>
        <Title style={styles.settingText}>Receive Notifications</Title>
        <Switch
          value={receiveNotifications}
          onValueChange={() => setReceiveNotifications(!receiveNotifications)}
        />
      </View>

      {/* Add more account settings as needed */}

      <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
        <Text style={styles.buttonText}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
    paddingHorizontal: 16,
  },
  settingText: {
    fontSize: 18,
    marginLeft: 16,
  },
  saveButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 20,
    alignSelf: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});

export default AccountSettingsScreen;
