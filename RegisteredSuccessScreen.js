import React, { useEffect } from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import { Button, Title, Avatar } from "react-native-paper";
import * as Animatable from "react-native-animatable";

const RegisteredSuccessScreen = ({ navigation }) => {
  useEffect(() => {
    animateSuccess(); // Trigger the success animation
  }, []);

  const animateSuccess = () => {
    this.successIcon.bounceIn(1500);
  };

  const handleContinue = () => {
    console.log("Navigating to FoodPreferences");
    navigation.navigate("FoodPreferences");
  };

  return (
    <ImageBackground
      source={require("./assets/scrngrd.jpg")} // Replace with your image
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Animatable.View
          style={styles.contentContainer}
          animation="fadeInUpBig"
        >
          <Title style={styles.title}>Registration Successful</Title>

          <Animatable.View
            ref={(ref) => (this.successIcon = ref)}
            style={styles.successIconContainer}
          >
            <Avatar.Image
              size={100}
              source={require("./assets/Healthlogo.png")} // Replace with your app logo
              style={styles.successIcon}
            />
          </Animatable.View>

          <Text style={styles.successMessage}>
            Your account has been successfully registered!
          </Text>

          <Button
            mode="contained"
            onPress={handleContinue}
            style={styles.continueButton}
            labelStyle={styles.buttonText}
          >
            Continue
          </Button>
        </Animatable.View>
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
  contentContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
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
    color: "#007BFF", // Your app's primary color
  },
  successIconContainer: {
    marginBottom: 20,
  },
  successIcon: {
    backgroundColor: "white", // Background color for the avatar
  },
  successMessage: {
    fontSize: 18,
    color: "#333", // Your text color
    textAlign: "center",
    marginBottom: 30,
  },
  continueButton: {
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: "#007BFF", // Your app's primary color
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});

export default RegisteredSuccessScreen;
