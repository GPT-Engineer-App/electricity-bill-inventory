import React from "react";
import { ChakraProvider, Box, Flex, Heading, VStack, HStack, Text, IconButton, Table, Thead, Tbody, Tr, Th, Td, theme, Spacer, Button } from "@chakra-ui/react";
import { FaPowerOff, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";

// Mock data for PPA assets
const ppaAssets = [
  { id: 1, type: "Water", kwh: 1000, cost: 300, marketPrice: 320 },
  { id: 2, type: "Wind", kwh: 1500, cost: 450, marketPrice: 470 },
  { id: 3, type: "Solar", kwh: 1200, cost: 350, marketPrice: 365 },
  { id: 4, type: "Spot Market", kwh: 900, cost: 290, marketPrice: 310 },
];

const Index = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box p={4}>
        <Flex align="center" mb={8}>
          <Heading size="lg">Electricity Bill Inventory</Heading>
          <Spacer />
          <Button leftIcon={<FaSignInAlt />} colorScheme="teal" variant="solid">
            Sign In
          </Button>
          <IconButton ml={2} colorScheme="red" aria-label="Sign Out" icon={<FaSignOutAlt />} />
        </Flex>
        <VStack spacing={4} align="stretch">
          <Box>
            <Heading size="md">PPA Assets</Heading>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Number</Th>
                  <Th>Type</Th>
                  <Th isNumeric>kWh</Th>
                  <Th isNumeric>Current Cost ($)</Th>
                  <Th isNumeric>Average Market Price ($)</Th>
                </Tr>
              </Thead>
              <Tbody>
                {ppaAssets.map((asset, index) => (
                  <Tr key={asset.id}>
                    <Td>{index + 1}</Td>
                    <Td>{asset.type}</Td>
                    <Td isNumeric>{asset.kwh}</Td>
                    <Td isNumeric>{asset.cost.toFixed(2)}</Td>
                    <Td isNumeric>{asset.marketPrice.toFixed(2)}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
        </VStack>
      </Box>
    </ChakraProvider>
  );
};

export default Index;
