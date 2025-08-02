import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LoginScreen from "./screens/Login";
import { colors } from "./Colors";
import RegisterScreen from "./screens/Register";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <LoginScreen />
      {/* <RegisterScreen /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
});
