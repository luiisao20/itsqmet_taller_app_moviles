import { View, Text, Pressable, StyleSheet } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

import { colors } from "../../Colors";

interface Props {
  quantity: number;
  cart?: boolean;

  increment: () => void;
  decrement: () => void;
}

const ButtonsQuantity = ({quantity, cart, increment, decrement}:Props) => {
  return (
    <View style={styles.quantContainer}>
      <Pressable
        disabled={quantity === 1 && !cart}
        onPress={decrement}
        style={{ borderRightWidth: 1, borderColor: "white" }}
      >
        <AntDesign name="minus" size={24} color={colors.primary} />
      </Pressable>
      <Text style={{ marginHorizontal: 10, fontSize: 18, color: "white" }}>
        {quantity}
      </Text>
      <Pressable
        onPress={increment}
        style={{ borderLeftWidth: 1, borderColor: "white" }}
      >
        <AntDesign name="plus" size={24} color={colors.primary} />
      </Pressable>
    </View>
  );
};

export default ButtonsQuantity;

const styles = StyleSheet.create({
  quantContainer: {
    flexDirection: "row",
    backgroundColor: colors.secondary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    paddingVertical: 2,
  },
});
