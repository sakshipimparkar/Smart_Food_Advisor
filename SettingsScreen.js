import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Appbar, Switch, Menu, Divider } from "react-native-paper";

const SettingsScreen = ({ navigation }) => {
  const [isDarkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("English");
  const [languageMenuVisible, setLanguageMenuVisible] = useState(false);

  const handleGoBack = () => {
    // Navigate back to the MainMenuScreen
    navigation.goBack();
  };

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
    // Implement logic to change the app's theme to dark mode
  };

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    setLanguageMenuVisible(false);
    // Implement logic to change the app's language based on the selectedLanguage
  };

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={handleGoBack} />
        <Appbar.Content title="Settings" />
      </Appbar.Header>

      {/* Dark Mode */}
      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Dark Mode</Text>
        <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
      </View>

      {/* Language */}
      <TouchableOpacity
        style={styles.settingItem}
        onPress={() => setLanguageMenuVisible(true)}
      >
        <Text style={styles.settingLabel}>Language</Text>
        <Text>{language}</Text>
        <Menu
          visible={languageMenuVisible}
          onDismiss={() => setLanguageMenuVisible(false)}
          anchor={
            <TouchableOpacity onPress={() => setLanguageMenuVisible(true)}>
              <Text style={{ opacity: 0 }}>Language</Text>
            </TouchableOpacity>
          }
        >
          <Menu.Item
            onPress={() => handleLanguageChange("English")}
            title="English"
          />
          <Menu.Item
            onPress={() => handleLanguageChange("Marathi")}
            title="Marathi"
          />
          <Menu.Item
            onPress={() => handleLanguageChange("Hindi")}
            title="Hindi"
          />
        </Menu>
      </TouchableOpacity>

      {/* Add more unique settings components as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  settingLabel: {
    fontSize: 18,
  },
});

export default SettingsScreen;
