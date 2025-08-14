import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/Login";
import { User } from "../interfaces/User";
import RegisterScreen from "../screens/Register";
import HomeScreen from "../screens/home/Home";
import CartScreen from "../screens/cart/CartScreen";

export type RootStackParams = {
  login: undefined;
  register: undefined;
  home: User;
  cart: undefined;
};

const StackNavigator = () => {
  const Stack = createStackNavigator<RootStackParams>();
  return (
    <Stack.Navigator
      initialRouteName="login"
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
      <Stack.Screen name="cart" component={CartScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
