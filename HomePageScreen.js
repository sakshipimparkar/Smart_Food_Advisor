import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  TextInput,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Appbar, Card, Title, Paragraph, Searchbar } from "react-native-paper";

const HomePageScreen = ({ navigation }) => {
  // Sample data (replace with actual data)
  const selectedPreferences = ["Vegan", "Gluten-Free"];
  const savedMedicalConditions = "None"; // Replace with actual data
  const cuisineNames = ["Italian", "Mexican", "Indian"]; // Replace with actual data
  const userAge = 30; // Replace with actual user age

  // Function to calculate diet plan based on age and medical conditions
  const calculateDietPlan = (age, medicalConditions) => {
    // Replace with logic to determine the diet plan based on age and medical conditions
    // Example: If age is less than 40 and no medical conditions, suggest a balanced diet
    return "Balanced Diet";
  };

  // Get the user's diet plan
  const userDietPlan = calculateDietPlan(userAge, savedMedicalConditions);

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Image
          source={require("./assets/Healthlogo.png")} // Replace with your app logo
          style={styles.appLogo}
        />
        <Appbar.Content title="Dr. Remedy" />
        {/* Menu button to navigate to the main menu screen */}
        <Appbar.Action
          icon="menu"
          onPress={() => navigation.navigate("MainMenuScreen")} // Replace "MainMenu" with your actual screen name
        />
      </Appbar.Header>

      <ImageBackground
        source={require("./assets/scrngrd.jpg")}
        style={styles.backgroundImage}
      >
        <View style={styles.container}>
          {/* Display selected preferences */}
          <Card style={styles.card}>
            <Card.Content>
              <Title>Selected Preferences:</Title>
              <Paragraph>{selectedPreferences.join(", ")}</Paragraph>
            </Card.Content>
          </Card>

          {/* Display saved medical conditions */}
          <Card style={styles.card}>
            <Card.Content>
              <Title>Medical Conditions:</Title>
              <Paragraph>{savedMedicalConditions}</Paragraph>
            </Card.Content>
          </Card>

          {/* Display cuisine names */}
          <Card style={styles.card}>
            <Card.Content>
              <Title>Cuisine Names:</Title>
              <Paragraph>{cuisineNames.join(", ")}</Paragraph>
            </Card.Content>
          </Card>

          {/* Display user's diet plan */}
          <Card style={styles.card}>
            <Card.Content>
              <Title>Diet Plan:</Title>
              <Paragraph>{userDietPlan}</Paragraph>
            </Card.Content>
          </Card>

          {/* Search option */}
          <Searchbar style={styles.searchInput} placeholder="Search" />

          {/* Additional features can be added here */}
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    resizeMode: "cover",
    justifyContent: "center",
  },
  card: {
    marginBottom: 20,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
  },
  searchInput: {
    marginTop: 20,
    marginBottom: 20,
  },
  appLogo: {
    width: 50,
    height: 45,
    marginHorizontal: 10,
  },
});

export default HomePageScreen;
