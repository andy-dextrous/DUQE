const badgeStyle = {
  baseStyle: {
    rounded: "md",
    letterSpacing: "wider",
    fontWeight: "medium",
    px: "2",
  },
  variants: {
    filled: props => ({
      bg: "brandBlue.900",
      color: "white",
    }),
  },
}

export { badgeStyle as Badge }
