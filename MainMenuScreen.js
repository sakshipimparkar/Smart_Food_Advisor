import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from "react-native";
import { Appbar, TouchableRipple } from "react-native-paper";

const MainMenuScreen = ({ navigation }) => {
  const handleNavigation = (screen) => {
    // Navigate to the specified screen
    navigation.navigate(screen);
  };

  return (
    <ImageBackground
      source={require("./assets/scrngrd.jpg")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Appbar.Header>
          <Appbar.Content title="Main Menu" />
        </Appbar.Header>

        <TouchableRipple
          style={styles.optionButton}
          onPress={() => handleNavigation("PersonalInformationScreen")}
        >
          <Text style={styles.optionText}>Personal Information</Text>
        </TouchableRipple>

        <TouchableRipple
          style={styles.optionButton}
          onPress={() => handleNavigation("AccountSettingsScreen")}
        >
          <Text style={styles.optionText}>Account Settings</Text>
        </TouchableRipple>

        <TouchableRipple
          style={styles.optionButton}
          onPress={() => handleNavigation("SettingsScreen")}
        >
          <Text style={styles.optionText}>Settings</Text>
        </TouchableRipple>

        <TouchableRipple
          style={styles.optionButton}
          onPress={() => handleNavigation("ConsultOnlineScreen")}
        >
          <Text style={styles.optionText}>Consult Online</Text>
        </TouchableRipple>

        <TouchableRipple
          style={styles.optionButton}
          onPress={() => handleNavigation("NotificationsScreen")}
        >
          <Text style={styles.optionText}>Notifications</Text>
        </TouchableRipple>

        <TouchableRipple
          style={styles.optionButton}
          onPress={() => handleNavigation("AboutScreen")}
        >
          <Text style={styles.optionText}>About</Text>
        </TouchableRipple>

        <TouchableRipple
          style={styles.optionButton}
          onPress={() => handleNavigation("FeedbackScreen")}
        >
          <Text style={styles.optionText}>Feedback</Text>
        </TouchableRipple>

        <TouchableRipple
          style={styles.optionButton}
          onPress={() => handleNavigation("LoginScreen")}
        >
          <Text style={styles.optionText}>Log Out</Text>
        </TouchableRipple>

        <TouchableRipple
          style={styles.optionButton}
          onPress={() => handleNavigation("ReportProblemScreen")}
        >
          <Text style={styles.optionText}>Report a Problem</Text>
        </TouchableRipple>

        {/* Add more buttons as needed */}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    resizeMode: "cover",
  },
  optionButton: {
    backgroundColor: "rgba(0, 0, 0, 0.3)", // Transparent background
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  optionText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});

export default MainMenuScreen;
