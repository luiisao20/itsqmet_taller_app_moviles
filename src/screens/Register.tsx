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
import { colors } from "../../Colors";
import { useState } from "react";
import PasswordComponent from "../components/PasswordComponent";
import { styles } from "../../assets/styles";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParams } from "../navigator/StackNavigator";
import { useAuthStore } from "../store/useAuthStore";
import { User } from "../interfaces/User";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonComponent from "../components/ButtonComponent";

interface Register {
  name: string;
  lastName: string;
  username: string;
  cellphone: string;
  email: string;
  password: string;
}

type Props = StackScreenProps<RootStackParams, "register">;

const RegisterScreen = ({ navigation }: Props) => {
  const { width } = useWindowDimensions();
  const [registerForm, setRegisterForm] = useState<Register>({
    name: "",
    lastName: "",
    username: "",
    cellphone: "",
    email: "",
    password: "",
  });
  const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex: RegExp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  const { existsUser, registerUser } = useAuthStore();

  const handleRegister = () => {
    const { name, lastName, username, cellphone, email, password } =
      registerForm;

    if (
      name.trim() === "" ||
      lastName.trim() === "" ||
      username.trim() === "" ||
      cellphone.trim() === ""
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

    if (existsUser(email)) {
      Alert.alert(
        "Error",
        `El correo ${email} ya se encuentra registrado en la aplicación`
      );
      return;
    }

    const newUser: User = {
      name,
      lastName,
      email,
      cellphone,
      password,
    };

    registerUser(newUser);
    navigation.popToTop();
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <KeyboardAvoidingView behavior="padding">
        <ScrollView>
          <View style={{ ...styles.container, width: width * 0.9 }}>
            <Text style={styles.title}>
              Rellena tus datos y crea una cuenta
            </Text>
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
                  value={registerForm.cellphone}
                  onChangeText={(value) =>
                    setRegisterForm((prev) => ({ ...prev, cellphone: value }))
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
              <ButtonComponent onPress={handleRegister}>
                <Text style={styles.textButton}>Registrarse</Text>
              </ButtonComponent>
              <Pressable onPress={() => navigation.popToTop()}>
                <Text style={{ fontSize: 14, color: colors.text }}>
                  ¿Ya posees una cuenta?{" "}
                  <Text style={styles.subtitle}>Inicia sesión aquí</Text>
                </Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;
