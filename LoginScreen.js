import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";

const LoginScreen = ({ navigation }) => {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Implement your login logic here
    // For now, navigate to the HomePage
    navigation.navigate("HomePage");
  };

  return (
    <View style={styles.container}>
      {/* Background Image */}
      <Image
        source={require("./assets/scrngrd.jpg")} // Replace with your image
        style={styles.backgroundImage}
      />

      <View style={styles.formContainer}>
        <Text style={styles.title}>Login</Text>

        <TextInput
          style={styles.input}
          label="Email or Phone Number"
          value={emailOrPhone}
          onChangeText={(text) => setEmailOrPhone(text)}
        />

        <TextInput
          style={styles.input}
          label="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <Button
          style={styles.loginButton}
          mode="contained"
          onPress={handleLogin}
        >
          Login
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  formContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    marginBottom: 15,
    width: "100%",
  },
  loginButton: {
    marginTop: 10,
    width: "100%",
  },
});

export default LoginScreen;
