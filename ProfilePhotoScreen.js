import React, { useState } from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import { Button, Card, Title, Avatar } from "react-native-paper";
import { Image } from "react-native-elements";

const ProfilePhotoScreen = ({ navigation }) => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handleChoosePhoto = () => {
    // Implement logic to choose a photo
    console.log("Choose a photo");
  };

  const handleContinue = () => {
    // Implement logic to continue to the next screen
    console.log("Continue to the next screen");
    // Navigate to the RegisterSuccess screen
    navigation.navigate("RegisteredSuccess");
  };

  return (
    <ImageBackground
      source={require("./assets/scrngrd.jpg")} // Replace with your image
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Title style={styles.title}>Profile Photo</Title>

        <Card style={styles.photoContainer}>
          {selectedPhoto ? (
            <Card.Cover source={{ uri: selectedPhoto }} />
          ) : (
            <Card.Content style={styles.placeholderContent}>
              <Avatar.Icon size={64} icon="camera" style={styles.cameraIcon} />
            </Card.Content>
          )}
        </Card>

        <Button
          mode="contained"
          onPress={handleChoosePhoto}
          style={styles.choosePhotoButton}
          labelStyle={styles.choosePhotoButtonText}
        >
          Choose Photo
        </Button>

        <Button
          mode="contained"
          onPress={handleContinue}
          style={styles.continueButton}
          labelStyle={styles.continueButtonText}
        >
          Continue
        </Button>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    resizeMode: "cover",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "white",
  },
  photoContainer: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 15,
    overflow: "hidden",
  },
  placeholderContent: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  cameraIcon: {
    backgroundColor: "#007BFF",
  },
  choosePhotoButton: {
    marginBottom: 10,
    backgroundColor: "#007BFF",
    borderRadius: 10,
  },
  choosePhotoButtonText: {
    fontSize: 16,
  },
  continueButton: {
    borderRadius: 10,
    backgroundColor: "#4CAF50",
  },
  continueButtonText: {
    fontSize: 16,
  },
});

export default ProfilePhotoScreen;
