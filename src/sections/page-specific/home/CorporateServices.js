import {
  Box,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react"
import React from "react"
import { SmartImage } from "../../../components/SmartImage"

function CorporateServices() {
  return (
    <Box width="100%" maxW="container.xl" zIndex="2">
      <Box
        layerStyle="fillSpace"
        minH="70vh"
        position="relative"
        rounded="2xl"
        overflow="hidden"
      >
        <Grid
          w="100%"
          h="100%"
          layerStyle="fillSpaceAbsolute"
          zIndex="2"
          templateColumns="repeat(12,1fr)"
          templateRows="repeat(12,1fr)"
        >
          <GridItem
            gridColumnStart="2"
            gridColumnEnd="4"
            gridRowStart="3"
            gridRowEnd="11"
          >
            <HStack h="100%" spacing={12}>
              <Box
                w="2px"
                h="100%"
                bg="dark.500"
                position="relative"
                _before={{
                  content: "''",
                  width: "4px",
                  height: "80px",
                  position: "absolute",
                  left: "-1px",
                  top: "0",
                  bg: "brandYellow.default",
                  zIndex: "2",
                }}
              />
              <VStack
                as="ul"
                align="start"
                h="100%"
                justify="space-between"
                py={20}
              >
                <Box as="li" color="white" fontWeight="extrabold">
                  Accounting
                </Box>
                <Box as="li" color="white">
                  VAT Registration
                </Box>
                <Box as="li" color="white">
                  Bank Account Opening Assistance
                </Box>
                <Box as="li" color="white">
                  Medical & Emirates ID Assistance
                </Box>
                <Box as="li" color="white">
                  Insurance
                </Box>
                <Box as="li" color="white">
                  Business Center
                </Box>
              </VStack>
            </HStack>
          </GridItem>
          <GridItem
            gridColumnStart="7"
            gridColumnEnd="12"
            gridRowStart="8"
            gridRowEnd="13"
            bg="brandYellow.default"
            p={12}
          >
            <HStack w="full" justify="space-between" align="center">
              <Heading as="h4" textTransform="unset">
                Accounting
              </Heading>
              <Image src="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1650950415/DUQE/accounting.svg" />
            </HStack>
            <Text mt={8} fontSize="20">
              Our accountants will sort out your invoices, receipts, payments,
              etc. and make sure your financial records are maintained per
              international standards, so you have one less thing to worry
              about.
            </Text>
          </GridItem>
        </Grid>
        <Box zIndex="-2">
          <Box layerStyle="overlay" />
          <SmartImage
            img="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/q_auto/v1650947182/DUQE/Rectangle_21.png"
            layerStyle="bgImage"
          />
        </Box>
      </Box>
    </Box>
  )
}

export default CorporateServices
