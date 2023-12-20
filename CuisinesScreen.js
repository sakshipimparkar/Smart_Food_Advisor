import React, { useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Button, Title, Checkbox } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const CuisinesScreen = ({ route, navigation }) => {
  const { preference } = route.params;
  const [selectedSection, setSelectedSection] = useState("Breakfast");
  const [selectedItems, setSelectedItems] = useState([]);

  const cuisines = {
    Vegetarian: {
      Breakfast: [
        "Poha",
        "Upma",
        "Thalipeeth",
        "Masale Bhaat",
        "Sheera",
        "Sabudana Khichdi",
        "Puran Poli",
        "Kothimbir Vadi",
        "Misal Pav",
        "Batata Vada",
        "Aloo Paratha",
        "Pohe",
        "Methi Thepla",
        "Idli Sambar",
        "Dhokla",
        "Chole Bhature",
        "Rava Dosa",
        "Medu Vada",
        "Besan Cheela",
        "Paneer Bhurji",
        "Vegetable Uttapam",
        "Samosa",
        "Bread Pakora",
        "Aloo Puri",
        "Chana Chaat",
        "Vegetable Pongal",
        "Mango Sheera",
        "Kanda Bhaji",
        "Cheese Sandwich",
      ],
      Meal: [
        "Paneer Tikka",
        "Biryani",
        "Kadai Paneer",
        "Vegetable Biryani",
        "Chana Masala",
        "Rajma Chawal",
        "Veg Pulao",
        "Dal Tadka",
        "Aloo Gobi",
        "Palak Paneer",
        "Mushroom Masala",
        "Baingan Bharta",
        "Gobi Manchurian",
        "Paneer Butter Masala",
        "Dal Makhani",
        "Bhindi Masala",
        "Aloo Jeera",
        "Vegetable Korma",
        "Masoor Dal",
        "Spinach Dal",
        "Cabbage Sabzi",
        "Cauliflower Curry",
        "Chole Palak",
        "Tomato Rasam",
        "Cucumber Raita",
        "Bhindi Do Pyaza",
        "Vegetable Stew",
        "Mango Dal",
        "Aloo Matar",
      ],
    },
    "Non-Vegetarian": {
      Breakfast: [
        "Chicken Stuffed Paratha",
        "Egg Bhurji",
        "Chicken Sandwich",
        "Egg Fried Rice",
        "Egg Dosa",
        "Omelette",
        "Chicken Idli",
        "Egg Chilli Cheese Toast",
        "Mutton Keema Paratha",
        "Chicken Poha",
        "Egg Uttapam",
        "Fish Curry",
        "Chicken Sausage Sandwich",
        "Egg Roll",
        "Mutton Kheema Puri",
        "Chicken Momos",
        "Egg Hakka Noodles",
        "Kheema Pav",
        "Chicken Kathi Roll",
        "Egg Baida Roti",
        "Fish Fry",
        "Chicken Liver Fry",
        "Egg Appam",
        "Mutton Korma",
        "Egg Upma",
        "Chicken Keema Dosa",
        "Chicken Soup",
        "Egg Maggi",
        "Mutton Masala Dosa",
      ],
      Meal: [
        "Chicken Biryani",
        "Fish Curry",
        "Mutton Rogan Josh",
        "Butter Chicken",
        "Prawn Masala",
        "Chicken Korma",
        "Goat Curry",
        "Fish Biryani",
        "Egg Curry",
        "Chicken Chettinad",
        "Mutton Do Pyaza",
        "Kadai Chicken",
        "Hyderabadi Biryani",
        "Prawn Curry",
        "Chicken Malai Tikka",
        "Mutton Curry",
        "Goan Fish Curry",
        "Chicken Sukka",
        "Fish Fry",
        "Mutton Biryani",
        "Kerala Chicken Curry",
        "Prawn Biryani",
        "Chicken 65",
        "Mutton Kofta",
        "Fish Koliwada",
        "Egg Pulao",
        "Chicken Vindaloo",
        "Mutton Biriyani",
        "Goat Biryani",
      ],
    },
  };

  const handleContinue = () => {
    navigation.navigate("AllergiesScreen", { selectedItems });
  };

  const handleCheckboxToggle = (item) => {
    const updatedItems = selectedItems.includes(item)
      ? selectedItems.filter((selectedItem) => selectedItem !== item)
      : [...selectedItems, item];

    setSelectedItems(updatedItems);
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Cuisines for {preference}</Title>

      <View style={styles.sectionButtons}>
        <Button
          mode="contained"
          onPress={() => setSelectedSection("Breakfast")}
          style={[
            styles.sectionButton,
            selectedSection === "Breakfast" && styles.activeSectionButton,
          ]}
          labelStyle={styles.buttonText}
        >
          Breakfast
        </Button>
        <Button
          mode="contained"
          onPress={() => setSelectedSection("Meal")}
          style={[
            styles.sectionButton,
            selectedSection === "Meal" && styles.activeSectionButton,
          ]}
          labelStyle={styles.buttonText}
        >
          Meal
        </Button>
      </View>

      <ScrollView style={styles.scrollContainer}>
        {cuisines[preference][selectedSection].map((cuisine, index) => (
          <Checkbox.Item
            key={index}
            label={cuisine}
            status={selectedItems.includes(cuisine) ? "checked" : "unchecked"}
            onPress={() => handleCheckboxToggle(cuisine)}
            color="#4CAF50"
          />
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  sectionButtons: {
    flexDirection: "row",
    marginBottom: 20,
  },
  sectionButton: {
    flex: 1,
    borderRadius: 0,
  },
  activeSectionButton: {
    backgroundColor: "#4CAF50",
  },
  scrollContainer: {
    width: "100%",
    marginBottom: 20,
  },
  continueButton: {
    backgroundColor: "#4CAF50",
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});

export default CuisinesScreen;
