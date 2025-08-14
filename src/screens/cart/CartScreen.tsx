import { useEffect } from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import { RootStackParams } from "../../navigator/StackNavigator";
import { colors } from "../../../Colors";
import { styles } from "../../../assets/styles";
import { useCartStore } from "../../store/useCartStore";
import CartProduct from "./components/CartProduct";

type Props = StackScreenProps<RootStackParams, "cart">;

const CartScreen = ({ navigation }: Props) => {
  const { cart, getTotal, clearCart } = useCartStore();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: `Carrito de compras `,
      headerStyle: {
        backgroundColor: colors.background,
        elevation: 0,
      },
      headerTitleAlign: "center",
    });
  }, [cart]);

  const handleBuy = () => {
    Alert.alert('Éxito!', 'La compra se ha llevado con éxito!')
    clearCart();
    navigation.pop();
  }

  return (
    <View style={styles.mainContainer}>
      {cart.length > 0 ? (
        <>
          <FlatList
            data={cart}
            keyExtractor={(item) => item.id?.toString()!}
            renderItem={({ item }) => <CartProduct product={item} />}
          />
          <TouchableOpacity onPress={handleBuy} style={styles.total}>
            <Text style={styles.textTotal}>
              Confirmar total: ${getTotal().toFixed(2)}
            </Text>
          </TouchableOpacity>
        </>
      ) : (
        <Text style={{ fontSize: 30, textAlign: "center" }}>
          ¡No existen productos añadidos al carrito!
        </Text>
      )}
    </View>
  );
};

export default CartScreen;
