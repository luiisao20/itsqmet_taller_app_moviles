import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import { colors } from "../../../../Colors";
import { CartProduct, useCartStore } from "../../../store/useCartStore";
import ButtonsQuantity from "../../../components/ButtonsQuantity";

interface Props {
  product: CartProduct;
}

const CardProduct = ({ product }: Props) => {
  const newPrice = product.price * (1 - product.discount);
  const { deleteItem, decreaseQuantity, addProduct } = useCartStore();

  return (
    <>
      <View style={localStyles.container}>
        <Text style={localStyles.title}>{product.name}</Text>
        <View style={localStyles.row}>
          <Image
            source={{ uri: product.pathImage }}
            style={localStyles.image}
          />
          <View>
            <Text style={localStyles.text}>Cantidad: {product.quantity}</Text>
            {product.discount !== 0 && (
              <Text style={localStyles.text}>
                Descuento: {product.discount * 100}%
              </Text>
            )}
            <Text style={localStyles.text}>
              Precio individual: $ {newPrice.toFixed(2)}
            </Text>
            <Text style={localStyles.total}>
              Precio total: $ {(newPrice * product.quantity).toFixed(2)}
            </Text>
            <View style={localStyles.buttons}>
              <TouchableOpacity
                style={localStyles.button}
                onPress={() => deleteItem(product.id!)}
              >
                <MaterialIcons
                  name="remove-shopping-cart"
                  size={20}
                  color="white"
                />
              </TouchableOpacity>
              <ButtonsQuantity
                cart
                quantity={product.quantity}
                increment={() => addProduct(product, 1)}
                decrement={() => {
                  if (product.quantity > 1) decreaseQuantity(product.id!);
                  else deleteItem(product.id!);
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default CardProduct;

const localStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderBottomWidth: 2,
    borderColor: colors.background,
    position: "relative",
  },
  title: {
    fontWeight: "600",
    fontSize: 20,
    marginVertical: 10,
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  image: {
    width: 130,
    height: 180,
    borderRadius: 20,
    elevation: 4,
  },
  text: {
    fontSize: 18,
    fontWeight: "200",
  },
  total: {
    fontWeight: "400",
    fontSize: 18,
    color: "green",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "red",
    borderRadius: 12,
    padding: 8,
    alignItems: "center",
    alignSelf: "center",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
