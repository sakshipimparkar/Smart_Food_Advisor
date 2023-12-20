import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { HelperText } from "react-native-paper";
import { Image as RNImage } from "react-native";
import { Icon } from "react-native-elements";

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [usernameError, setUsernameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const handleRegister = () => {
    // Reset error messages
    setUsernameError(false);
    setEmailError(false);
    setPasswordError(false);
    setConfirmPasswordError(false);
    setErrorMessage("");

    // Validate fields
    if (!username) {
      setUsernameError(true);
      setErrorMessage("Username is required");
    }

    if (!emailOrPhone) {
      setEmailError(true);
      setErrorMessage("Email or Phone Number is required");
    }

    // Password conditions
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!password) {
      setPasswordError(true);
      setErrorMessage("Password is required");
    } else if (!passwordRegex.test(password)) {
      setPasswordError(true);
      setErrorMessage(
        "Password must be at least 8 characters long and include at least one letter and one number"
      );
    }

    if (!confirmPassword || confirmPassword !== password) {
      setConfirmPasswordError(true);
      setErrorMessage("Passwords do not match");
    }

    // If all fields are valid, navigate to the next screen
    if (
      !usernameError &&
      !emailError &&
      !passwordError &&
      !confirmPasswordError &&
      username &&
      emailOrPhone &&
      password &&
      confirmPassword === password
    ) {
      console.log("Navigating to AdditionalDetails");
      navigation.navigate("AdditionalDetails");
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/scrngrd.jpg")} // Replace with your image
        style={styles.backgroundImage}
      />

      <View style={styles.formContainer}>
        <View style={styles.logoContainer}>
          <Icon name="ios-leaf" type="ionicon" color="#4CAF50" size={80} />
          <Text style={styles.logoText}>Your App Name</Text>
        </View>

        <Text style={styles.title}>Create an Account</Text>

        <TextInput
          style={styles.input}
          label="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
          error={usernameError}
        />
        <HelperText type="error" visible={usernameError}>
          {errorMessage}
        </HelperText>

        <TextInput
          style={styles.input}
          label="Email or Phone Number"
          value={emailOrPhone}
          onChangeText={(text) => setEmailOrPhone(text)}
          error={emailError}
        />
        <HelperText type="error" visible={emailError}>
          {errorMessage}
        </HelperText>

        <TextInput
          style={styles.input}
          label="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
          error={passwordError}
        />
        <HelperText type="error" visible={passwordError}>
          {errorMessage}
        </HelperText>

        <TextInput
          style={styles.input}
          label="Confirm Password"
          secureTextEntry
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
          error={confirmPasswordError}
        />
        <HelperText type="error" visible={confirmPasswordError}>
          {errorMessage}
        </HelperText>

        <Button
          style={styles.registerButton}
          mode="contained"
          onPress={handleRegister}
        >
          Sign Up
        </Button>

        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Already have an account?</Text>
          <Text
            style={styles.loginLink}
            onPress={() => navigation.navigate("Login")}
          >
            Login
          </Text>
        </View>
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
  logoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  logoText: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    marginBottom: 15,
  },
  registerButton: {
    marginTop: 10,
    borderRadius: 10,
    width: "100%",
  },
  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  loginText: {
    fontSize: 16,
    marginRight: 5,
  },
  loginLink: {
    fontSize: 16,
    color: "#007BFF",
    fontWeight: "bold",
  },
});

export default RegisterScreen;
