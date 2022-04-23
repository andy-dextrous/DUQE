import * as React from "react"
import { graphql } from "gatsby"
import useGravityForm, { ACTION_TYPES } from "../../../../hooks/useGravityForm"
import { Input } from "@chakra-ui/react"

export const EMAIL_FIELD_FIELDS = graphql`
  fragment EmailFieldFields on WpEmailField {
    id
    label
    description
    cssClass
    isRequired
    placeholder
  }
`

const DEFAULT_VALUE = ""

export default function EmailField({ field, fieldErrors }) {
  const { id, type, description, cssClass, isRequired, placeholder } = field
  const htmlId = `field_${id}`
  const { state, dispatch } = useGravityForm()
  const fieldValue = state.find(fieldValue => fieldValue.id === id) || undefined
  const value = fieldValue?.emailValues?.value || DEFAULT_VALUE

  return (
    <div className={`gfield gfield-${type} ${cssClass}`.trim()}>
      <Input
        type="email"
        size="lg"
        fontSize={["xs", "sm", "md"]}
        variant="filled"
        name={String(id)}
        id={htmlId}
        placeholder={placeholder || ""}
        required={Boolean(isRequired)}
        value={value}
        onChange={event => {
          dispatch({
            type: ACTION_TYPES.updateEmailFieldValue,
            fieldValue: {
              id,
              emailValues: {
                value: event.target.value,
              },
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
    </div>
  )
}
