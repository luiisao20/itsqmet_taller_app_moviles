import {
  View,
  Text,
  TextInput,
  StyleSheet,
  useWindowDimensions,
  Pressable,
  KeyboardAvoidingView,
} from "react-native";
import { colors } from "../Colors";

const LoginScreen = () => {
  const { width } = useWindowDimensions();

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
            />
          </View>
          <View>
            <Text style={styles.label}>Contraseña</Text>
            <TextInput
              style={styles.input}
              placeholder="**********"
              secureTextEntry={true}
              keyboardType="default"
              autoCapitalize="none"
            />
          </View>
          <Pressable
            style={({ pressed }) =>
              pressed ? { ...styles.button, opacity: 0.5 } : styles.button
            }
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    padding: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    paddingHorizontal: 10,
    marginBottom: 20,
    color: colors.primary,
  },
  form: {
    paddingHorizontal: 20,
    display: "flex",
    gap: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: "semibold",
    marginBottom: 10,
    color: colors.primary,
  },
  input: {
    color: colors.primary,
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.secondary,
  },
  button: {
    backgroundColor: colors.secondary,
    padding: 10,
    borderRadius: 12,
  },
  textButton: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    color: colors.secondary,
    textDecorationLine: "underline",
  },
});
