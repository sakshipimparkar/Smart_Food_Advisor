import React, { useState } from "react";
import { View, ScrollView, StyleSheet, ImageBackground } from "react-native";
import {
  Button,
  Title,
  Checkbox,
  Appbar,
  IconButton,
  Divider,
  Headline,
} from "react-native-paper";

const AllergiesScreen = ({ navigation }) => {
  const [selectedAllergies, setSelectedAllergies] = useState([]);

  const allergies = [
    "Peanuts",
    "Dairy",
    "Gluten",
    "Shellfish",
    "Soy",
    "Tree Nuts",
    "Egg",
    "Fish",
    "Wheat",
    "Sesame",
    "Mustard",
    "Corn",
    "Lactose",
    "Sulfites",
    "Mollusks",
    "Celery",
    "Red Dye",
  ];

  const toggleAllergy = (allergy) => {
    const isSelected = selectedAllergies.includes(allergy);
    if (isSelected) {
      setSelectedAllergies(selectedAllergies.filter((a) => a !== allergy));
    } else {
      setSelectedAllergies([...selectedAllergies, allergy]);
    }
  };

  const handleContinue = () => {
    navigation.navigate("MedicalConditionsScreen", { selectedAllergies });
  };

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.appBar}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Select Allergies" />
        <IconButton icon="dots-vertical" onPress={() => console.log("Menu")} />
      </Appbar.Header>

      <ImageBackground
        source={require("./assets/imgg.jpg")}
        style={styles.backgroundImage}
      >
        <ScrollView style={styles.scrollView}>
          <Headline style={styles.headline}>Select Multiple</Headline>
          {allergies.map((allergy, index) => (
            <View key={index} style={styles.checkboxContainer}>
              <Checkbox.Item
                label={allergy}
                status={
                  selectedAllergies.includes(allergy) ? "checked" : "unchecked"
                }
                onPress={() => toggleAllergy(allergy)}
                labelStyle={styles.allergyText}
                color="#FF5722" // Deep Orange color
              />
              <Divider />
            </View>
          ))}
        </ScrollView>

        <Button
          mode="contained"
          onPress={handleContinue}
          style={styles.continueButton}
          labelStyle={styles.buttonText}
        >
          Continue
        </Button>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff", // White background
  },
  appBar: {
    backgroundColor: "#FFFFFF", // Accent color
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  scrollView: {
    width: "100%",
    marginBottom: 20,
  },
  headline: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333", // Dark text color
  },
  checkboxContainer: {
    marginBottom: 10,
  },
  allergyText: {
    fontSize: 18,
    color: "#333", // Dark text color
  },
  continueButton: {
    backgroundColor: "#4CAF50", // Green color
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff", // White text color
  },
});

export default AllergiesScreen;
