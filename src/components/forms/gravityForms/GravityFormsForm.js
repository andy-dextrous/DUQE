import React, { useEffect } from "react"
import { graphql } from "gatsby"
import { useMutation, gql } from "@apollo/client"
import useGravityForm from "../../../hooks/useGravityForm"
import GravityFormsField from "./GravityFormsField"
import {
  Box,
  Button,
  FormControl,
  HStack,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react"

export const GRAVITY_FORM_FIELDS = graphql`
  fragment GravityFormFields on WpGfForm {
    databaseId
    title
    description
    button {
      text
    }
    confirmations {
      isDefault
      message
    }
    formFields {
      nodes {
        id
        type
        layoutGridColumnSpan
        ...AddressFieldFields
        ...CheckboxFieldFields
        ...DateFieldFields
        ...EmailFieldFields
        ...MultiSelectFieldFields
        ...NameFieldFields
        ...PhoneFieldFields
        ...RadioFieldFields
        ...SelectFieldFields
        ...TextFieldFields
        ...TextAreaFieldFields
        ...TimeFieldFields
        ...WebsiteFieldFields
      }
    }
  }
`

const SUBMIT_FORM = gql`
  mutation submitForm($databaseId: ID!, $fieldValues: [FormFieldValuesInput]!) {
    submitGfForm(input: { id: $databaseId, fieldValues: $fieldValues }) {
      entry {
        id
      }
      errors {
        id
        message
      }
    }
  }
`

export default function GravityFormsForm({ form }) {
  const [submitForm, { data, loading, error }] = useMutation(SUBMIT_FORM)
  const haveEntryId = Boolean(data?.submitGfForm?.entry)
  const haveFieldErrors = Boolean(data?.submitGfForm?.errors?.length)
  const wasSuccessfullySubmitted = haveEntryId && !haveFieldErrors
  const defaultConfirmation = form.confirmations?.find(
    confirmation => confirmation?.isDefault
  )
  const formFields = form.formFields?.nodes || []
  const { state } = useGravityForm()
  const formRef = React.useRef(null)
  const containerRef = React.useRef(null)

  // After render, fix the height of the form to prevent layout shifts on subimitted forms
  useEffect(() => {
    const formTotalHeight = formRef.current.getBoundingClientRect().height
    containerRef.current.style.height = formTotalHeight + "px"
  }, [])

  function handleSubmit(event) {
    event.preventDefault()
    if (loading) return

    submitForm({
      variables: {
        databaseId: form.databaseId,
        fieldValues: state,
      },
    }).catch(error => {
      console.error(error)
    })
  }

  function getFieldErrors(id) {
    if (!haveFieldErrors) return []
    return data.submitGfForm.errors.filter(error => error.id === id)
  }

  return (
    <Box ref={containerRef}>
      {!wasSuccessfullySubmitted && (
        <FormControl>
          <form method="post" onSubmit={handleSubmit} ref={formRef}>
            <SimpleGrid columns={2} spacing={4}>
              {formFields.map(field => (
                <GravityFormsField
                  key={field?.id}
                  field={field}
                  fieldErrors={getFieldErrors(Number(field?.id))}
                  columnSpan={Number(field.layoutGridColumnSpan) / 6}
                />
              ))}
            </SimpleGrid>
            {error ? (
              <Text className="error-message">{error.message}</Text>
            ) : null}
            <HStack justify="center" mt={4}>
              {!loading ? (
                <Button
                  variant="yellow"
                  size="lg"
                  type="submit"
                  disabled={loading}
                >
                  {form?.button?.text || "Submit"}
                </Button>
              ) : (
                // If loading, show a spinner and disable the button
                <Spinner
                  thickness="4px"
                  emptyColor="gray.200"
                  speed="0.65s"
                  color="brandGreen.600"
                  size="xl"
                />
              )}
            </HStack>
          </form>
        </FormControl>
      )}

      {wasSuccessfullySubmitted && (
        <Text>
          {defaultConfirmation?.message ||
            "Form successfully submitted - thank you."}
        </Text>
      )}
    </Box>
  )
}
