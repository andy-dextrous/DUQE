import React from "react"
// Main menu toggle icon
function MenuToggleIcon({ color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30px"
      fill={color}
      viewBox="0 0 28 16"
    >
      <path style={{ fill: "none" }} d="M0 0h28v16H0z" />
      <path d="M20.67 14.67c0 .73-.6 1.33-1.34 1.33H2c-.74 0-1.33-.6-1.33-1.33s.59-1.34 1.33-1.34h17.33c.74 0 1.34.6 1.34 1.34ZM14 8c0 .74-.6 1.33-1.33 1.33H2C1.26 9.33.67 8.74.67 8S1.26 6.67 2 6.67h10.67C13.4 6.67 14 7.26 14 8ZM27.33 1.33c0 .74-.59 1.34-1.33 1.34H2c-.74 0-1.33-.6-1.33-1.34S1.26 0 2 0h24c.74 0 1.33.6 1.33 1.33Z" />
    </svg>
  )
}

export default MenuToggleIcon
