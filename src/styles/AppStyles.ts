import { StyleSheet } from "react-native";
import colors from "../constants/colors";

export const appStyles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.darkBackground,
    flex: 1,
    justifyContent: "center",
  },
  mainText: {
    color: colors.mainText,
  },
});
