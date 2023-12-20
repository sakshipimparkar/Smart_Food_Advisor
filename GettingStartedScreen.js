import React, { useEffect } from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { Avatar } from "react-native-elements";
import * as Animatable from "react-native-animatable";

const GettingStartedScreen = ({ navigation }) => {
  useEffect(() => {
    fadeIn();
    popUp();
  }, []);

  const fadeIn = () => {
    this.view.fadeIn(1500);
  };

  const popUp = () => {
    this.logo.bounceIn(2000);
  };

  return (
    <ImageBackground
      source={require("./assets/food.jpg")}
      style={styles.container}
    >
      <View style={styles.overlay}>
        <Animatable.View
          ref={(ref) => (this.view = ref)}
          style={styles.overlayContent}
        >
          <Animatable.View
            ref={(ref) => (this.logo = ref)}
            animation="bounceIn"
            duration={2000}
          >
            <Avatar
              rounded
              size="xlarge"
              source={require("./assets/Healthlogo.png")}
              containerStyle={styles.logoContainer}
            />
          </Animatable.View>
          <Text style={styles.subtitle}>Your Health, Our Priority</Text>
          <Button
            title="Get Started"
            buttonStyle={styles.getStartedButton}
            titleStyle={styles.buttonText}
            onPress={() => navigation.navigate("Register")}
          />
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
  },
  overlay: {
    flex: 1,
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.4)", // Semi-transparent black overlay
    justifyContent: "center",
    alignItems: "center",
  },
  overlayContent: {
    alignItems: "center",
  },
  logoContainer: {
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "white",
    marginBottom: 30,
    textAlign: "center",
  },
  getStartedButton: {
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: "#4CAF50", // Green color for a positive action
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});

export default GettingStartedScreen;
