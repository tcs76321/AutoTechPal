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
    paddingTop: 20,
    paddingLeft: 10,
  },
  titleText: {
    color: colors.text_color,
    fontSize: 24,
    fontWeight: "bold",
  },
  bodyContainer: {
    backgroundColor: colors.darkBackground,
    flex: 1,
    padding: 10,
    justifyContent: "flex-start",
  },
  bodyText: {
    color: colors.text_color,
    fontSize: 16,
  },
  mainText: {
    color: colors.text_color,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    paddingBottom: 30,
    paddingTop: 30,
  },
  footerContainer: {
    backgroundColor: colors.darkBackground,
    padding: 10,
    justifyContent: "center",
    paddingBottom: 20,
  },
  footerText: {
    color: colors.text_color,
    fontSize: 12,
    textAlign: "center",
  },
});
