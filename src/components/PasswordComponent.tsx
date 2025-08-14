import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { styles } from "../../assets/styles";
import { colors } from "../../Colors";

interface Props {
  password: string;
  onChangeText: (value: string) => void;
}

const PasswordComponent = ({ password, onChangeText }: Props) => {
  const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);

  return (
    <View>
      <Text style={styles.label}>Contraseña</Text>
      <TextInput
        style={styles.input}
        placeholder="**********"
        secureTextEntry={hiddenPassword}
        keyboardType="default"
        autoCapitalize="none"
        value={password}
        onChangeText={onChangeText}
      />
      <MaterialCommunityIcons
        onPress={() => setHiddenPassword(!hiddenPassword)}
        name={hiddenPassword ? "eye" : "eye-off"}
        size={24}
        color={colors.secondary}
        style={styles.icon}
      />
    </View>
  );
};

export default PasswordComponent;
