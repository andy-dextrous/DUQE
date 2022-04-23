import * as React from "react"
import { graphql } from "gatsby"

import useGravityForm, { ACTION_TYPES } from "../../../../hooks/useGravityForm"
import { Box, Textarea } from "@chakra-ui/react"

export const TEXT_AREA_FIELD_FIELDS = graphql`
  fragment TextAreaFieldFields on WpTextAreaField {
    id
    label
    description
    cssClass
    isRequired
  }
`

const DEFAULT_VALUE = ""

export default function TextAreaField({ field, fieldErrors }) {
  const { id, type, cssClass, isRequired } = field
  const htmlId = `field_${id}`
  const { state, dispatch } = useGravityForm()
  const fieldValue = state.find(fieldValue => fieldValue.id === id) || undefined
  const value = fieldValue?.value || DEFAULT_VALUE

  return (
    <Box
      className={`gfield gfield-${type} ${cssClass}`.trim()}
      gridColumnStart="1"
      gridColumnEnd="3"
    >
      {/* <label htmlFor={htmlId}>{label}</label> */}
      <Textarea
        variant="filled"
        minH="200px"
        fontSize={["xs", "sm", "md"]}
        placeholder="Your message"
        name={String(id)}
        id={htmlId}
        required={Boolean(isRequired)}
        value={value}
        onChange={event => {
          dispatch({
            type: ACTION_TYPES.updateTextAreaFieldValue,
            fieldValue: {
              id,
              value: event.target.value,
            },
          })
        }}
      />
      {/* {description ? <p className="field-description">{description}</p> : null} */}
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
