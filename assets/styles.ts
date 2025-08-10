import { StyleSheet } from "react-native";
import { colors } from "../Colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    padding: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    paddingHorizontal: 10,
    marginBottom: 20,
    color: colors.primary,
  },
  form: {
    paddingHorizontal: 20,
    display: "flex",
    gap: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: "semibold",
    marginBottom: 10,
    color: colors.primary,
  },
  input: {
    color: colors.primary,
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.secondary,
  },
  button: {
    backgroundColor: colors.secondary,
    padding: 10,
    borderRadius: 12,
  },
  textButton: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    color: colors.secondary,
    textDecorationLine: "underline",
  },
  icon: {
    position: "absolute",
    right: 10,
    bottom: 10,
  },
});
