import * as React from "react"

import AddressField from "./GravityFormsFields/AddressField"
import CheckboxField from "./GravityFormsFields/CheckboxField"
import DateField from "./GravityFormsFields/DateField"
import EmailField from "./GravityFormsFields/EmailField"
import MultiSelectField from "./GravityFormsFields/MultiSelectField"
import NameField from "./GravityFormsFields/NameField"
import PhoneField from "./GravityFormsFields/PhoneField"
import RadioField from "./GravityFormsFields/RadioField"
import SelectField from "./GravityFormsFields/SelectField"
import TextField from "./GravityFormsFields/TextField"
import TextAreaField from "./GravityFormsFields/TextAreaField"
import TimeField from "./GravityFormsFields/TimeField"
import WebsiteField from "./GravityFormsFields/WebsiteField"

export default function GravityFormsField({ field, fieldErrors, columnSpan }) {
  switch (field.type) {
    case "ADDRESS":
      return (
        <AddressField
          field={field}
          fieldErrors={fieldErrors}
          columnSpan={columnSpan}
        />
      )
    case "CHECKBOX":
      return (
        <CheckboxField
          field={field}
          fieldErrors={fieldErrors}
          columnSpan={columnSpan}
        />
      )
    case "DATE":
      return (
        <DateField
          field={field}
          fieldErrors={fieldErrors}
          columnSpan={columnSpan}
        />
      )
    case "EMAIL":
      return (
        <EmailField
          field={field}
          fieldErrors={fieldErrors}
          columnSpan={columnSpan}
        />
      )
    case "MULTISELECT":
      return (
        <MultiSelectField
          field={field}
          fieldErrors={fieldErrors}
          columnSpan={columnSpan}
        />
      )
    case "NAME":
      return (
        <NameField
          field={field}
          fieldErrors={fieldErrors}
          columnSpan={columnSpan}
        />
      )
    case "PHONE":
      return (
        <PhoneField
          field={field}
          fieldErrors={fieldErrors}
          columnSpan={columnSpan}
        />
      )
    case "RADIO":
      return (
        <RadioField
          field={field}
          fieldErrors={fieldErrors}
          columnSpan={columnSpan}
        />
      )
    case "SELECT":
      return (
        <SelectField
          field={field}
          fieldErrors={fieldErrors}
          columnSpan={columnSpan}
        />
      )
    case "TEXT":
      return (
        <TextField
          field={field}
          fieldErrors={fieldErrors}
          columnSpan={columnSpan}
        />
      )
    case "TEXTAREA":
      return (
        <TextAreaField
          field={field}
          fieldErrors={fieldErrors}
          columnSpan={columnSpan}
        />
      )
    case "TIME":
      return (
        <TimeField
          field={field}
          fieldErrors={fieldErrors}
          columnSpan={columnSpan}
        />
      )
    case "WEBSITE":
      return (
        <WebsiteField
          field={field}
          fieldErrors={fieldErrors}
          columnSpan={columnSpan}
        />
      )
    default:
      return <p>{`Field type not supported: ${field.type}.`}</p>
  }
}
