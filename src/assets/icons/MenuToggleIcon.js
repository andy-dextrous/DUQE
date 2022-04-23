import React from "react"
// Main menu toggle icon
function MenuToggleIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={29}
      height={16}
      viewBox="0 0 29 16"
    >
      <g transform="translate(0 0)">
        <rect
          width={29}
          height={2}
          rx={1}
          transform="translate(0 0)"
          fill="#12172a"
          className="outer"
        />
        <rect
          width={21}
          height={2}
          rx={1}
          transform="translate(0 7)"
          fill="#12172a"
        />
        <rect
          width={29}
          height={2}
          rx={1}
          transform="translate(0 14)"
          fill="#12172a"
          className="outer"
        />
      </g>
    </svg>
  )
}

export default MenuToggleIcon
