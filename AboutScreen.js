import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Appbar, Card, Title, Paragraph } from "react-native-paper";

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="About Dr. Remedy App" />
      </Appbar.Header>

      <Card style={styles.card}>
        <Card.Content>
          <Title>About Dr. Remedy App</Title>
          <Paragraph>
            Dr. Remedy App is your trusted health companion, providing valuable
            information and resources for a healthier lifestyle. Our mission is
            to empower individuals to take control of their well-being and make
            informed decisions about their health.
          </Paragraph>
        </Card.Content>
        <Card.Actions>
          <Text style={styles.version}>Version 1.0.0</Text>
        </Card.Actions>
      </Card>

      {/* Additional features or information can be added here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    margin: 10,
  },
  version: {
    fontSize: 16,
    color: "#555",
  },
});

export default AboutScreen;
