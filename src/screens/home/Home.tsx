import { View, TouchableOpacity, FlatList, Text } from "react-native";
import { useEffect } from "react";
import { StackScreenProps } from "@react-navigation/stack";

import { RootStackParams } from "../../navigator/StackNavigator";
import { styles } from "../../../assets/styles";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { colors } from "../../../Colors";
import { products } from "../../constants/products";
import CardProduct from "./components/CardProduct";
import { useCartStore } from "../../store/useCartStore";

type Props = StackScreenProps<RootStackParams, "home">;

const HomeScreen = ({ route, navigation }: Props) => {
  const params = route.params;
  const { cart } = useCartStore();

  const IconLogout = () => {
    return (
      <TouchableOpacity
        style={{ marginLeft: 20 }}
        onPress={() => navigation.popToTop()}
      >
        <MaterialIcons name="logout" size={24} color={colors.secondary} />
      </TouchableOpacity>
    );
  };

  const IconCart = () => {
    return (
      <TouchableOpacity
        style={{ marginRight: 20, position: "relative" }}
        onPress={() => navigation.navigate('cart')}
      >
        <MaterialIcons
          name="shopping-cart"
          size={24}
          color={colors.secondary}
        />
        {cart.length > 0 && <Text style={styles.notification}>{cart.length}</Text>}
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerLeft: () => <IconLogout />,
      headerRight: () => <IconCart />,
      title: `Bienvenido `,
      headerStyle: {
        backgroundColor: colors.background,
        elevation: 0,
      },
      headerTitleAlign: "center",
    });
  }, [cart]);

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id?.toString()!}
        renderItem={({ item }) => <CardProduct product={item} />}
      />
    </View>
  );
};

export default HomeScreen;
