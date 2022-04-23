import * as React from "react"
import { graphql } from "gatsby"
import useGravityForm, { ACTION_TYPES } from "../../../../hooks/useGravityForm"
import { Select } from "@chakra-ui/react"

export const SELECT_FIELD_FIELDS = graphql`
  fragment SelectFieldFields on WpSelectField {
    id
    placeholder
    description
    cssClass
    isRequired
    defaultValue
    choices {
      text
      value
    }
  }
`

export default function SelectField({ field, fieldErrors }) {
  const {
    id,
    type,
    placeholder,
    description,
    cssClass,
    isRequired,
    defaultValue,
    choices,
  } = field
  const htmlId = `field_${id}`
  const { state, dispatch } = useGravityForm()
  const fieldValue = state.find(fieldValue => fieldValue.id === id) || undefined
  const value = fieldValue?.value || String(defaultValue)

  return (
    <div className={`gfield gfield-${type} ${cssClass}`.trim()}>
      {/* <label htmlFor={htmlId}>{label}</label> */}
      <Select
        color="gray.400"
        variant="filled"
        fontSize={["xs", "sm", "md"]}
        size="lg"
        placeholder={placeholder}
        name={String(id)}
        id={htmlId}
        required={Boolean(isRequired)}
        value={value}
        onChange={event => {
          dispatch({
            type: ACTION_TYPES.updateSelectFieldValue,
            fieldValue: {
              id,
              value: event.target.value,
            },
          })
        }}
      >
        {choices?.map(choice => (
          <option key={choice?.value || ""} value={choice?.value || ""}>
            {choice?.text || ""}
          </option>
        ))}
      </Select>
      {description ? <p className="field-description">{description}</p> : null}
      {fieldErrors?.length
        ? fieldErrors.map(fieldError => (
            <p key={fieldError.id} className="error-message">
              {fieldError.message}
            </p>
          ))
        : null}
    </div>
  )
}
