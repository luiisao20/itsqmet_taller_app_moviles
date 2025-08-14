import { View, TouchableOpacity, FlatList } from "react-native";
import { useEffect } from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParams } from "../../navigator/StackNavigator";
import { styles } from "../../../assets/styles";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { colors } from "../../../Colors";
import { products } from "../../constants/products";
import CardProduct from "./components/CardProduct";

type Props = StackScreenProps<RootStackParams, "home">;

const HomeScreen = ({ route, navigation }: Props) => {
  const params = route.params;

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
      <TouchableOpacity style={{ marginRight: 20 }} onPress={() => {}}>
        <MaterialIcons
          name="shopping-cart"
          size={24}
          color={colors.secondary}
        />
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
  }, []);

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
