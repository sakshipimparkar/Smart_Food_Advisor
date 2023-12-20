import React from "react";
import { View, StyleSheet, Image, ImageBackground } from "react-native";
import { Button, Title, Appbar } from "react-native-paper";
import { Icon } from "react-native-elements";

const FoodPreferencesScreen = ({ navigation }) => {
  const handleNavigateToCuisines = (preference) => {
    navigation.navigate("CuisinesScreen", { preference });
  };

  return (
    <ImageBackground
      source={require("./assets/bckgrnd.jpg")} // Replace with your background image
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Appbar.Header style={styles.appbar}>
          <Image
            source={require("./assets/DietRX.png")} // Replace with your logo
            style={styles.logo}
          />
          <Appbar.Content title="Food Preferences" titleStyle={styles.title} />
        </Appbar.Header>

        <View style={styles.content}>
          <Button
            mode="contained"
            onPress={() => handleNavigateToCuisines("Vegetarian")}
            style={styles.preferenceButton}
            labelStyle={styles.preferenceButtonText}
          >
            <Icon name="leaf" type="font-awesome" color="white" />
            {"  "}Vegetarian
          </Button>

          <Button
            mode="contained"
            onPress={() => handleNavigateToCuisines("Non-Vegetarian")}
            style={styles.preferenceButton}
            labelStyle={styles.preferenceButtonText}
          >
            <Icon name="paw" type="font-awesome" color="white" />
            {"  "}Non-Vegetarian
          </Button>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
  },
  appbar: {
    backgroundColor: "transparent", // Transparent appbar
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginLeft: 16,
  },
  logo: {
    width: 40,
    height: 40,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent White background color
  },
  preferenceButton: {
    borderRadius: 10,
    marginVertical: 10,
    backgroundColor: "#2196F3", // Blue button color
  },
  preferenceButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});

export default FoodPreferencesScreen;
