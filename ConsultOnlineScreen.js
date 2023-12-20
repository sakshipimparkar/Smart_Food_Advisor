import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Card, Title, Paragraph } from "react-native-paper";

const ConsultOnlineScreen = ({ navigation }) => {
  const handleGoBack = () => {
    // Navigate back to the MainMenuScreen
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>Consult Online</Title>
          <Paragraph style={styles.description}>
            Schedule an online consultation with our experienced doctors.
            {/* Add more information as needed */}
          </Paragraph>
        </Card.Content>

        {/* Add more UI components related to online consultation if needed */}

        <Card.Actions style={styles.actions}>
          <Button
            style={styles.goBackButton}
            mode="contained"
            onPress={handleGoBack}
          >
            Go Back
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  card: {
    elevation: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  actions: {
    justifyContent: "flex-end",
  },
  goBackButton: {
    backgroundColor: "#4CAF50", // Green color for a positive action
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 20,
  },
});

export default ConsultOnlineScreen;
