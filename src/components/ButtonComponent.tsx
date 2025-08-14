import { Pressable, PressableProps } from "react-native";
import React, {ReactNode} from "react";
import {styles} from "../../assets/styles";

interface Props extends PressableProps{
  children: ReactNode;

  onPress: () => void;
}

const ButtonComponent = ({children, onPress, ...rest}:Props) => {
  return (
    <Pressable
      style={({ pressed }) =>
        pressed ? { ...styles.button, opacity: 0.5 } : styles.button
      }
      onPress={onPress}
      {...rest}
    >
      {children}
    </Pressable>
  );
};

export default ButtonComponent;
