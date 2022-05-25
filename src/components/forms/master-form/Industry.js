import React, { useState } from "react"
import { Select } from "@chakra-ui/react"
import data from "./data.json"

function Industry({ handleChange, index }) {
  const [selection, setSelection] = useState("")
  const industries = [
    "Agriculture",
    "Apparel",
    "Banking",
    "Biotechnology",
    "Business Accelerator",
    "Chemicals",
    "Communications",
    "Construction",
    "Consulting",
    "Education",
    "Electronics",
    "Energy",
    "Engineering",
    "Entertainment",
    "Environmental",
    "Finance",
    "Food & Beverage",
    "Government",
    "Healthcare",
    "Hospitality",
    "Insurance",
    "Machinery",
    "Manufacturing",
    "Marketing",
    "Not For Profit",
    "Media",
    "Other",
    "Private Equity",
    "Publishing",
    "Recreation",
    "Recruitment",
    "Retail",
    "Shipping",
    "Sports Management Services",
    "Technology",
    "Telecommunications",
    "Transportation",
    "Utilities",
    "Venture Capital",
  ]
  return (
    <Select
      bg="dark.50"
      placeholder="Select an industry"
      fontSize={["xs", "sm", "md"]}
      color="gray.400"
      value={selection}
      size="lg"
      name={data[index].name}
      id={data[index].name}
      gridColumnStart={1}
      gridColumnEnd={3}
      onChange={e => {
        setSelection(e.target.value)
        handleChange(e.target.value, index)
      }}
    >
      {industries.map((industry, i) => {
        return (
          <option key={industry} value={industry}>
            {industry}
          </option>
        )
      })}
    </Select>
  )
}

export default Industry
