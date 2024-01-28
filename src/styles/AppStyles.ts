import { StyleSheet } from "react-native";
import colors from "../constants/colors";

export const appStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkBackground,
    flex: 1,
    paddingTop: 10,
  },
  titleContainer: {
    alignSelf: 'flex-start',
    backgroundColor: colors.darkBackground,
    paddingTop: 10,
    paddingLeft: 10,
  },
  titleText: {
    color: colors.text_color,
    fontSize: 24,
    fontWeight: "bold",
  },
  mainText: {
    color: colors.text_color,
  },
});
