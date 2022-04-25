export const Button = {
  baseStyle: {
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "dark.default",
    lineHeight: "24",
    letterSpacing: "0",
  },
  variants: {
    primary: {
      bg: "brandBlue.default",
    },
    secondary: {
      bg: "brandYellow.default",
    },
    outlineWhite: {
      bg: "transparent",
      border: "1px solid white",
      color: "white",
    },
    outlineDark: {
      bg: "transparent",
      border: "1px solid",
      borderColor: "dark.default",
      color: "dark.default",
    },
  },
  sizes: {
    lg: {
      px: 8,
      py: 4,
      fontSize: "16",
    },
    sm: {
      px: 12,
      py: 6,
      fontSize: "14",
    },
  },

  defaultProps: {
    variant: "primary",
    size: "lg",
  },
}
