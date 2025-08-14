import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  useWindowDimensions,
  Pressable,
  KeyboardAvoidingView,
  Alert,
} from "react-native";

import { colors } from "../../Colors";
import { styles } from "../../assets/styles";
import PasswordComponent from "../components/PasswordComponent";
import { useAuthStore } from "../store/useAuthStore";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParams } from "../navigator/StackNavigator";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonComponent from "../components/ButtonComponent";

interface Login {
  email: string;
  password: string;
}

type Props = StackScreenProps<RootStackParams, "login">;

const LoginScreen = ({ navigation }: Props) => {
  const { width } = useWindowDimensions();
  const [form, setForm] = useState<Login>({
    email: "",
    password: "",
  });
  const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const { loginUser } = useAuthStore();

  const handleSubmit = () => {
    const { email, password } = form;
    if (!emailRegex.test(email)) {
      Alert.alert("Error", "El correo ingresado no es válido");
      return;
    }

    if (password.trim() === "") {
      Alert.alert("Error", "El campo de la contraseña está vacío");
      return;
    }

    const currentUser = loginUser(form.email, form.password);

    if (currentUser) {
      navigation.navigate("home", currentUser);
      setForm({ password: "", email: "" });
    } else {
      Alert.alert("Error", "Correo o contraseña incorrectos!");
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <KeyboardAvoidingView behavior="padding">
        <View style={{ ...styles.container, width: width * 0.9 }}>
          <Text style={styles.title}>Ingrese con su correo y contraseña</Text>
          <View style={styles.form}>
            <View>
              <Text style={styles.label}>Correo electrónico</Text>
              <TextInput
                style={styles.input}
                placeholder="example@example.com"
                keyboardType="email-address"
                autoCapitalize="none"
                value={form.email}
                onChangeText={(text) =>
                  setForm((prev) => ({ ...prev, email: text }))
                }
              />
            </View>
            <PasswordComponent
              password={form.password}
              onChangeText={(value) =>
                setForm((prev) => ({ ...prev, password: value }))
              }
            />
            <ButtonComponent onPress={handleSubmit}>
              <Text style={styles.textButton}>Ingresar</Text>
            </ButtonComponent>
            <Text style={{ fontSize: 14, color: colors.text }}>
              ¿Olvidaste tu correo o contraseña?{" "}
              <Text style={styles.subtitle}>Haz clic aquí</Text>
            </Text>
            <Pressable onPress={() => navigation.navigate("register")}>
              <Text style={{ fontSize: 14, color: colors.text }}>
                ¿No posees una cuenta?{" "}
                <Text style={styles.subtitle}>Regístrate aquí</Text>
              </Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;
