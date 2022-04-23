import * as React from "react"
import { graphql } from "gatsby"
import useGravityForm, { ACTION_TYPES } from "../../../../hooks/useGravityForm"
import { Box, Input } from "@chakra-ui/react"

export const TIME_FIELD_FIELDS = graphql`
  fragment TimeFieldFields on WpTimeField {
    id
    label
    description
    cssClass
    isRequired
  }
`

const DEFAULT_VALUE = ""

export default function TimeField({ field, fieldErrors }) {
  const { id, type, label, description, cssClass, isRequired } = field
  const htmlId = `field_${id}`
  const { state, dispatch } = useGravityForm()
  const fieldValue = state.find(fieldValue => fieldValue.id === id) || undefined
  const value = fieldValue?.value || DEFAULT_VALUE

  return (
    <Box className={`gfield gfield-${type} ${cssClass}`.trim()}>
      <label htmlFor={htmlId}>{label}</label>
      <Input
        size="lg"
        fontSize={["xs", "sm", "md"]}
        variant="filled"
        type="time"
        name={String(id)}
        id={htmlId}
        required={Boolean(isRequired)}
        value={value}
        onChange={event => {
          dispatch({
            type: ACTION_TYPES.updateTimeFieldValue,
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
