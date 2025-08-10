import {
  View,
  Text,
  TextInput,
  useWindowDimensions,
  Pressable,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import { colors } from "../Colors";
import { useState } from "react";
import { styles } from "../assets/styles";
import PasswordComponent from "../src/components/PasswordComponent";

interface Login {
  email: string;
  password: string;
}

const LoginScreen = () => {
  const { width } = useWindowDimensions();
  const [login, setLogin] = useState<Login>({
    email: "",
    password: "",
  });
  const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = () => {
    const { email, password } = login;
    if (!emailRegex.test(email)) {
      Alert.alert("Error", "El correo ingresado no es válido");
      return;
    }

    if (password.trim() === "") {
      Alert.alert(
        "Error",
        "El campo de la contraseña está vacío"
      );
      return;
    }

    Alert.alert("Sesión iniciada", "La sesión se inició con éxito");
    console.log({ login });
  };

  return (
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
              value={login.email}
              onChangeText={(text) =>
                setLogin((prev) => ({ ...prev, email: text }))
              }
            />
          </View>
          <PasswordComponent
            password={login.password}
            onChangeText={(value) =>
              setLogin((prev) => ({ ...prev, password: value }))
            }
          />
          <Pressable
            style={({ pressed }) =>
              pressed ? { ...styles.button, opacity: 0.5 } : styles.button
            }
            onPress={handleSubmit}
          >
            <Text style={styles.textButton}>Ingresar</Text>
          </Pressable>
          <Text style={{ fontSize: 14, color: colors.primary }}>
            ¿Olvidaste tu correo o contraseña?{" "}
            <Text style={styles.subtitle}>Haz clic aquí</Text>
          </Text>
          <Text style={{ fontSize: 14, color: colors.primary }}>
            ¿No posees una cuenta?{" "}
            <Text style={styles.subtitle}>Regístrate aquí</Text>
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
