import {
  View,
  Text,
  TextInput,
  useWindowDimensions,
  Pressable,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
} from "react-native";
import { colors } from "../Colors";
import { useState } from "react";
import PasswordComponent from "../src/components/PasswordComponent";
import { styles } from "../assets/styles";

interface Register {
  name: string;
  lastName: string;
  username: string;
  phone: string;
  email: string;
  password: string;
}

const RegisterScreen = () => {
  const { width } = useWindowDimensions();
  const [registerForm, setRegisterForm] = useState<Register>({
    name: "",
    lastName: "",
    username: "",
    phone: "",
    email: "",
    password: "",
  });
  const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex: RegExp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

  const handleRegister = () => {
    const { name, lastName, username, phone, email, password } = registerForm;

    if (
      name.trim() === "" ||
      lastName.trim() === "" ||
      username.trim() === "" ||
      phone.trim() === ""
    ) {
      Alert.alert("Error", "Existen campos vacíos, por favor llénalos todos");
      return;
    }

    if (!emailRegex.test(email)) {
      Alert.alert("Error", "El correo ingresado no es válido");
      return;
    }

    if (!passwordRegex.test(password)) {
      Alert.alert(
        "Error",
        "La contraseña debe tener mínimo 8 caracteres, una mayúscula, un número y un caracter especial (!'&+-,./-@?:;)"
      );
      return;
    }

    Alert.alert(
      "Exito!",
      `El usuario se ha creado con éxito, bienvenid@ ${name}`
    );
    console.log({ registerForm });
  };

  return (
    <KeyboardAvoidingView behavior="padding">
      <ScrollView>
        <View style={{ ...styles.container, width: width * 0.9 }}>
          <Text style={styles.title}>Rellena tus datos y crea una cuenta</Text>
          <View style={styles.form}>
            <View>
              <Text style={styles.label}>Nombres</Text>
              <TextInput
                style={styles.input}
                placeholder="Luis"
                keyboardType="default"
                autoCapitalize="words"
                value={registerForm.name}
                onChangeText={(value) =>
                  setRegisterForm((prev) => ({ ...prev, name: value }))
                }
              />
            </View>
            <View>
              <Text style={styles.label}>Apellidos</Text>
              <TextInput
                style={styles.input}
                placeholder="Bravo"
                keyboardType="default"
                autoCapitalize="words"
                value={registerForm.lastName}
                onChangeText={(value) =>
                  setRegisterForm((prev) => ({ ...prev, lastName: value }))
                }
              />
            </View>
            <View>
              <Text style={styles.label}>Nombre de usuario</Text>
              <TextInput
                style={styles.input}
                placeholder="luis_bravo"
                keyboardType="default"
                autoCapitalize="none"
                value={registerForm.username}
                onChangeText={(value) =>
                  setRegisterForm((prev) => ({ ...prev, username: value }))
                }
              />
            </View>
            <View>
              <Text style={styles.label}>Número celular</Text>
              <TextInput
                style={styles.input}
                placeholder="0978823632"
                keyboardType="numeric"
                value={registerForm.phone}
                onChangeText={(value) =>
                  setRegisterForm((prev) => ({ ...prev, phone: value }))
                }
              />
            </View>
            <View>
              <Text style={styles.label}>Correo electrónico</Text>
              <TextInput
                style={styles.input}
                placeholder="example@example.com"
                keyboardType="email-address"
                autoCapitalize="none"
                value={registerForm.email}
                onChangeText={(value) =>
                  setRegisterForm((prev) => ({ ...prev, email: value }))
                }
              />
            </View>
            <PasswordComponent
              password={registerForm.password}
              onChangeText={(value) =>
                setRegisterForm((prev) => ({ ...prev, password: value }))
              }
            />
            <Pressable
              style={({ pressed }) =>
                pressed ? { ...styles.button, opacity: 0.5 } : styles.button
              }
              onPress={handleRegister}
            >
              <Text style={styles.textButton}>Registrarse</Text>
            </Pressable>
            <Text style={{ fontSize: 14, color: colors.primary }}>
              ¿Ya posees una cuenta?{" "}
              <Text style={styles.subtitle}>Inicia sesión aquí</Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;
