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
  backButtonBottom: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    backgroundColor: colors.white_color,
  },
  infoContainer: {
    margin: 10,
    padding: 10,
    backgroundColor: colors.white_color,
    borderRadius: 5,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 5,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    margin: 10,
  },
});
