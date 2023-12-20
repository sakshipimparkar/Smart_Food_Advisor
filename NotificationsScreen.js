import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { Card, Title } from "react-native-paper";

const NotificationsScreen = () => {
  const notifications = [
    { id: "1", message: "Appointment reminder: Tomorrow at 2 PM" },
    { id: "2", message: "New health tips available! Check them out." },
    { id: "3", message: "Your prescription is ready for pickup" },
    // Add more notifications as needed
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications</Text>

      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card style={styles.notificationItem}>
            <Card.Content>
              <Title style={styles.notificationText}>{item.message}</Title>
            </Card.Content>
          </Card>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  notificationItem: {
    marginBottom: 10,
    borderRadius: 10,
    elevation: 3,
  },
  notificationText: {
    fontSize: 16,
  },
});

export default NotificationsScreen;
