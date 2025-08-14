import { StyleSheet } from "react-native";
import { colors } from "../Colors";

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  container: {
    backgroundColor: colors.background,
    padding: 10,
    borderRadius: 10,
    elevation: 3,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    paddingHorizontal: 10,
    marginBottom: 20,
    color: colors.text,
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
    color: colors.text,
  },
  input: {
    color: colors.text,
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.secondary,
  },
  button: {
    backgroundColor: colors.button,
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
  notification: {
    position: "absolute",
    color: colors.tertiary,
    fontWeight: "bold",
    right: -4,
    top: -8,
  },
  total: {
    position: "absolute",
    padding: 10,
    borderRadius: 12,
    elevation: 2,
    backgroundColor: colors.tertiary,
    bottom: 30,
    right: 10
  },
  textTotal: {
    color: "white",
    fontWeight: "300",
    fontSize: 20,

  },
});
