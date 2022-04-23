import * as React from "react"
import { graphql } from "gatsby"
import useGravityForm, { ACTION_TYPES } from "../../../../hooks/useGravityForm"
import { Box, Input } from "@chakra-ui/react"

export const TEXT_FIELD_FIELDS = graphql`
  fragment TextFieldFields on WpTextField {
    id
    label
    description
    cssClass
    isRequired
    placeholder
  }
`

const DEFAULT_VALUE = ""

export default function TextField({ field, fieldErrors }) {
  const { id, type, description, cssClass, isRequired, placeholder } = field
  const htmlId = `field_1_${id}`
  const { state, dispatch } = useGravityForm()
  const fieldValue = state.find(fieldValue => fieldValue.id === id) || undefined
  const value = fieldValue?.value || DEFAULT_VALUE

  return (
    <Box className={`gfield gfield-${type} ${cssClass}`.trim()}>
      {/* <label htmlFor={htmlId}>{label}</label> */}
      <Input
        variant="filled"
        size="lg"
        fontSize={["xs", "sm", "md"]}
        type="text"
        name={String(id)}
        id={htmlId}
        required={Boolean(isRequired)}
        placeholder={placeholder || ""}
        value={value}
        onChange={event => {
          dispatch({
            type: ACTION_TYPES.updateTextFieldValue,
            fieldValue: {
              id,
              value: event.target.value,
            },
          })
        }}
      />
      {description ? <p className="field-description">{description}</p> : null}
      {fieldErrors?.length
        ? fieldErrors.map(fieldError => (
            <p key={fieldError.id} className="error-message">
              {fieldError.message}
            </p>
          ))
        : null}
    </Box>
  )
}
