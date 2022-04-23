import * as React from "react"
import { graphql } from "gatsby"
import useGravityForm, { ACTION_TYPES } from "../../../../hooks/useGravityForm"
import { Box, Input } from "@chakra-ui/react"

export const DATE_FIELD_FIELDS = graphql`
  fragment DateFieldFields on WpDateField {
    id
    label
    description
    cssClass
    isRequired
    placeholder
  }
`

const DEFAULT_VALUE = ""

export default function DateField({ field, fieldErrors }) {
  const { id, type, description, cssClass, isRequired, placeholder } = field
  const htmlId = `field_${id}`
  const { state, dispatch } = useGravityForm()
  const fieldValue = state.find(fieldValue => fieldValue.id === id) || undefined
  const value = fieldValue?.value || DEFAULT_VALUE

  return (
    <Box className={`gfield gfield-${type} ${cssClass}`.trim()}>
      <Input
        variant="filled"
        size="lg"
        type="date"
        name={String(id)}
        id={htmlId}
        required={Boolean(isRequired)}
        placeholder={placeholder || ""}
        value={value}
        onChange={event => {
          dispatch({
            type: ACTION_TYPES.updateDateFieldValue,
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
