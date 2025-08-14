import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/Login";
import { User } from "../interfaces/User";
import RegisterScreen from "../screens/Register";
import HomeScreen from "../screens/home/Home";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text } from "react-native";
import { colors } from "../../Colors";

export type RootStackParams = {
  login: undefined;
  register: undefined;
  home: User;
};

const StackNavigator = () => {
  const Stack = createStackNavigator<RootStackParams>();
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{
        cardStyle: {
          backgroundColor: "white",
        },
        headerStyle: {
          elevation: 0,
        },
        headerShown: false,
      }}
    >
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="register" component={RegisterScreen} />
      <Stack.Screen name="home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
