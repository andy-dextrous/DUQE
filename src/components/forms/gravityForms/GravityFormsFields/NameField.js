import * as React from "react"
import { graphql } from "gatsby"
import useGravityForm, { ACTION_TYPES } from "../../../../hooks/useGravityForm"
import { Input, Select } from "@chakra-ui/react"

export const NAME_FIELD_FIELDS = graphql`
  fragment NameFieldFields on WpNameField {
    id
    label
    description
    cssClass
    inputs {
      key
      label
      placeholder
      choices {
        text
        value
      }
    }
  }
`

const DEFAULT_VALUE = {}

const AUTOCOMPLETE_ATTRIBUTES = {
  prefix: "honorific-prefix",
  first: "given-name",
  middle: "additional-name",
  last: "family-name",
  suffix: "honorific-suffix",
}

export default function NameField({ field, fieldErrors }) {
  const { id, type, label, description, cssClass, inputs } = field
  const htmlId = `field_${id}`
  const { state, dispatch } = useGravityForm()
  const fieldValue = state.find(fieldValue => fieldValue.id === id) | undefined
  const nameValues = fieldValue?.nameValues || DEFAULT_VALUE

  const prefixInput = inputs?.find(input => input?.key === "prefix")
  const otherInputs = inputs?.filter(input => input?.key !== "prefix") || []

  function handleChange(event) {
    const { name, value } = event.target
    const newNameValues = { ...nameValues, [name]: value }

    dispatch({
      type: ACTION_TYPES.updateNameFieldValue,
      fieldValue: {
        id,
        nameValues: newNameValues,
      },
    })
  }

  return (
    <fieldset
      id={htmlId}
      className={`gfield gfield-${type} ${cssClass}`.trim()}
    >
      <legend>{label}</legend>
      {prefixInput ? (
        <>
          <Select
            size="lg"
            fontSize={["xs", "sm", "md"]}
            variant="filled"
            name={String(prefixInput.key)}
            id={`input_${id}_${prefixInput.key}`}
            autoComplete={AUTOCOMPLETE_ATTRIBUTES.prefix}
            value={nameValues.prefix || ""}
            onChange={handleChange}
          >
            {/* <option value=""></option> */}
            {prefixInput.choices?.map(choice => (
              <option key={choice?.value} value={String(choice?.value)}>
                {String(choice?.text)}
              </option>
            ))}
          </Select>
          <label htmlFor={`input_${id}_${prefixInput.key}`}>
            {prefixInput.label}
          </label>
        </>
      ) : null}
      {otherInputs.map(input => {
        const key = input?.key
        const inputLabel = input?.label || ""
        const placeholder = input?.placeholder || ""
        return (
          <div key={key}>
            <Input
              size="lg"
              fontSize={["xs", "sm", "md"]}
              variant="filled"
              type="text"
              name={String(key)}
              id={`input_${id}_${key}`}
              placeholder={placeholder}
              autoComplete={AUTOCOMPLETE_ATTRIBUTES[key]}
              value={nameValues?.[key] || ""}
              onChange={handleChange}
            />
            <label htmlFor={`input_${id}_${key}`}>{inputLabel}</label>
          </div>
        )
      })}
      {description ? <p className="field-description">{description}</p> : null}
      {fieldErrors?.length
        ? fieldErrors.map(fieldError => (
            <p key={fieldError.id} className="error-message">
              {fieldError.message}
            </p>
          ))
        : null}
    </fieldset>
  )
}
