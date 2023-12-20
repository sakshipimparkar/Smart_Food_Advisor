// App.js
import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import GettingStartedScreen from "./GettingStartedScreen";
import RegisterScreen from "./RegisterScreen";
import AdditionalDetailsScreen from "./AdditionalDetailsScreen";
import LoginScreen from "./LoginScreen";
import ProfilePhotoScreen from "./ProfilePhotoScreen";
import FoodPreferencesScreen from "./FoodPreferencesScreen";
import CuisinesScreen from "./CuisinesScreen";
import RegisteredSuccessScreen from "./RegisteredSuccessScreen";
import AllergiesScreen from "./AllergiesScreen";
import MedicalConditionsScreen from "./MedicalConditionsScreen";
import HomePageScreen from "./HomePageScreen";
import MainMenuScreen from "./MainMenuScreen";
import PersonalInformationScreen from "./PersonalInformationScreen";
import AccountSettingsScreen from "./AccountSettingsScreen";
import AboutScreen from "./AboutScreen";
import NotificationsScreen from "./NotificationsScreen";
import FeedbackScreen from "./FeedbackScreen";
import ConsultOnlineScreen from "./ConsultOnlineScreen";
import ReportProblemScreen from "./ReportProblemScreen";
import SettingsScreen from "./SettingsScreen";
const Stack = createStackNavigator();

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="GettingStarted"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen
            name="GettingStarted"
            component={GettingStartedScreen}
          />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen
            name="AdditionalDetails"
            component={AdditionalDetailsScreen}
          />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="ProfilePhoto" component={ProfilePhotoScreen} />
          <Stack.Screen
            name="RegisteredSuccess"
            component={RegisteredSuccessScreen}
          />
          <Stack.Screen
            name="FoodPreferences"
            component={FoodPreferencesScreen}
          />
          <Stack.Screen name="CuisinesScreen" component={CuisinesScreen} />
          <Stack.Screen name="AllergiesScreen" component={AllergiesScreen} />
          <Stack.Screen
            name="MedicalConditionsScreen"
            component={MedicalConditionsScreen}
          />
          <Stack.Screen name="HomePage" component={HomePageScreen} />
          <Stack.Screen name="MainMenuScreen" component={MainMenuScreen} />
          <Stack.Screen
            name="PersonalInformationScreen"
            component={PersonalInformationScreen}
          />
          <Stack.Screen name="AboutScreen" component={AboutScreen} />
          <Stack.Screen
            name="AccountSettingsScreen"
            component={AccountSettingsScreen}
          />
          <Stack.Screen
            name="NotificationsScreen"
            component={NotificationsScreen}
          />
          <Stack.Screen name="FeedbackScreen" component={FeedbackScreen} />
          <Stack.Screen
            name="ReportProblemScreen"
            component={ReportProblemScreen}
          />
          <Stack.Screen
            name="ConsultOnlineScreen"
            component={ConsultOnlineScreen}
          />
          <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
