import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  useWindowDimensions,
  Image,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

import { Product } from "../../../constants/products";
import { colors } from "../../../../Colors";
import ButtonComponent from "../../../components/ButtonComponent";
import { useState } from "react";
import { useCartStore } from "../../../store/useCartStore";
import ButtonsQuantity from "../../../components/ButtonsQuantity";

interface Props {
  visible: boolean;
  product: Product;

  onClose: () => void;
}

export const ModalComponent = ({ visible, product, onClose }: Props) => {
  const { width } = useWindowDimensions();
  const newPrice = product.price - product.price * product.discount;
  const [quantity, setQuantity] = useState<number>(1);
  const { addProduct } = useCartStore();

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={{ ...styles.modalView, width: width * 0.9 }}>
          <Pressable onPress={onClose} style={styles.buttonClose}>
            <AntDesign name="close" size={28} color={colors.secondary} />
          </Pressable>
          <View style={styles.container}>
            <Image source={{ uri: product.pathImage }} style={styles.image} />
            <View style={{ ...styles.subText, width: "50%" }}>
              <Text style={{ fontSize: 18, fontWeight: "600" }}>
                {product.name}
              </Text>
              <Text style={{ fontSize: 18 }}>{product.category}</Text>
            </View>
            <View>
              <Text style={{ fontSize: 18 }}>$ {product.price}</Text>
              {product.discount > 0 && (
                <Text style={{ fontSize: 18, textAlign: 'right' }}>
                  - {product.discount * 100}%
                </Text>
              )}
            </View>
          </View>
          <View style={{ alignItems: "flex-end" }}>
            <ButtonsQuantity
              quantity={quantity}
              increment={() => setQuantity((prev) => prev + 1)}
              decrement={() => setQuantity((prev) => prev - 1)}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginVertical: 10,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: 300 }}>Total</Text>
            <Text style={{ fontSize: 18, fontWeight: 300 }}>
              $ {(newPrice * quantity).toFixed(2)}
            </Text>
          </View>
          <ButtonComponent
            onPress={() => {
              addProduct(product, quantity);
              setQuantity(1);
              onClose();
            }}
          >
            <Text style={{ color: "white", textAlign: "center", fontSize: 18 }}>
              Agregar al carrito
            </Text>
          </ButtonComponent>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    margin: 20,
    backgroundColor: colors.primary,
    borderRadius: 20,
    paddingVertical: 40,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    position: "relative",
  },
  buttonClose: {
    position: "absolute",
    right: 8,
    top: 4,
  },
  container: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  subText: {
    justifyContent: "space-between",
    flexDirection: "column",
    paddingVertical: 10,
  },
  image: {
    width: 60,
    height: 80,
    borderRadius: 10,
    elevation: 4,
  },
});
