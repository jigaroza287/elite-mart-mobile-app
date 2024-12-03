import { StyleSheet } from "react-native";
import { colors, spacing, typography } from "../../../theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: spacing.medium,
    justifyContent: "center",
  },
  termsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: spacing.large,
  },
  termsText: {
    ...typography.body3,
    color: colors.dark,
    flexShrink: 1,
    marginStart: spacing.small,
  },
  termsHighlightedText: {
    color: colors.primary,
  },
  orWithText: {
    ...typography.body3,
    color: colors.light20,
    marginVertical: spacing.small,
    textAlign: "center",
  },
  alreadyHaveAccountText: {
    ...typography.body1,
    color: colors.light20,
    marginTop: spacing.xMedium,
    textAlign: "center",
  },
  alreadyHaveAccountHighlightedText: {
    color: colors.primary,
    textDecorationLine: "underline",
  },
});
