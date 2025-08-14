import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

import { Product } from "../../../constants/products";
import { colors } from "../../../../Colors";

interface Props {
  product: Product;
}

const CardProduct = ({ product }: Props) => {
  return (
    <View style={[localStyles.container]}>
      <Text style={localStyles.title}>{product.name}</Text>
      {!product.available && (
        <Text style={localStyles.notAvailable}>NO DISPONIBLE</Text>
      )}
      <View style={[localStyles.row, !product.available && { opacity: 0.5 }]}>
        <Image source={{ uri: product.pathImage }} style={localStyles.image} />
        <View style={{ flex: 1 }}>
          <Text style={localStyles.text}>Categoría: {product.category}</Text>
          {product.discount !== 0 && (
            <Text style={localStyles.text}>
              Descuento: {product.discount * 100}%
            </Text>
          )}
          <Text
            style={
              product.discount === 0 ? localStyles.text : localStyles.discount
            }
          >
            Precio: $ {product.price}
          </Text>
          {product.discount !== 0 && (
            <Text style={localStyles.discountPrice}>
              Precio: $ {(product.discount * product.price).toFixed(2)}
            </Text>
          )}
          <TouchableOpacity
            disabled={!product.available}
            style={localStyles.button}
          >
            <FontAwesome5 name="cart-plus" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
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
  notAvailable: {
    color: "red",
    position: "absolute",
    transform: "rotate(-30deg)",
    top: 100,
    left: 60,
    fontSize: 40,
    zIndex: 99,
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
  discount: {
    textDecorationLine: "line-through",
    fontSize: 14,
    fontWeight: "200",
  },
  discountPrice: {
    fontWeight: "400",
    fontSize: 18,
    color: "green",
  },
  button: {
    marginTop: 10,
    backgroundColor: colors.secondary,
    paddingVertical: 10,
    borderRadius: 12,
    width: 50,
    alignItems: "center",
    alignSelf: "center",
  },
});
