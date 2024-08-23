import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screen/HomeScreen";

const stack = createNativeStackNavigator();

export default function appNavigation() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={HomeScreen}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
}
