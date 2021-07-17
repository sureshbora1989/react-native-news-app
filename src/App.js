import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../src/screens/HomeScreen";
import NewsDetailsScreen from "./screens/NewsDetailsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "./screens/ProfileScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="News Detais"
          options={{ headerShown: true }}
          component={bottomNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const bottomNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="News" component={NewsDetailsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default App;
