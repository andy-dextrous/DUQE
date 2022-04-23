export const IconButton = {
  // Styles for the base style
  baseStyle: {},
  // Styles for the size variations
  sizes: {},
  // Styles for the visual style variations
  variants: {
    green: props => ({
      bg: props.bg || "brandGreen.600",
    }),
    yellow: props => ({
      bg: props.bg || "brandYellow.600",
    }),
    gray: props => ({
      bg: props.bg || "gray.400",
    }),
    outline: props => ({
      bg: props.bg || "transparent",
      border: "1px solid",
      borderColor: props.borderColor || "gray.200",
    }),
  },
  // The default `size` or `variant` values
  defaultProps: {},
}
