import React, { useState } from "react";
import { Flex, Text, Image, Grid, Box, Button, VStack, Spacer, HStack } from "@chakra-ui/react";
import Stamp from "../assets/stamp.png";
import InputBarLeftEle from "../ui/InputBarLeftEle";
import InputBarRightEle from "../ui/InputBarRightEle";

export default function LegalFeeStampCalc() {
  const [currentNetIncome, setCurrentNetIncome] = useState(null);

  return (
    <Flex
      p="5"
      flexDir="column"
      w="100%"
      minW="300px"
      h={["2xl","2xl","sm","sm"]}
      minH="300px"
      borderRadius="10px"
      borderColor="none"
      borderWidth="2px"
    >
      <HStack pl={3} spacing="5">
        <Image w="45px" h="35px" src={Stamp} />
        <Text fontSize="xl" fontWeight="600">
          Legal Fees & Stamp Calculator
        </Text>
      </HStack>

      <Grid overflowY="hidden" h="100%" pt={5} templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)","repeat(2, 1fr)"]} gap={10}>
        <Box w="100%" h="100%">
        <InputBarLeftEle setCurrentData={setCurrentNetIncome} title="Monthly Net Income (After deduction of EPF, Socso)" children="RM"/>
        <InputBarLeftEle setCurrentData={setCurrentNetIncome} title="Monthly Net Income (After deduction of EPF, Socso)" children="RM"/>
        <br></br>
        <HStack overflowX="hidden">
            <Box h="45px" w="50%" bgColor="#ebf6f7"/>
        <Button bgColor="#192f60" color="white" h="45px" w="50%" _hover={{color:"black", bgColor:"green.200"}}>Calculate</Button>
        </HStack>
        </Box>

        <Box w="100%" h="100%">
        <InputBarLeftEle setCurrentData={setCurrentNetIncome} title="Monthly Net Income (After deduction of EPF, Socso)" children="RM"/>
        <InputBarLeftEle setCurrentData={setCurrentNetIncome} title="Monthly Net Income (After deduction of EPF, Socso)" children="RM"/>
        <br></br>
        <HStack overflowX="hidden">
            <Box h="45px" w="50%" bgColor="#ebf6f7"/>
        <Button bgColor="#192f60" color="white" h="45px" w="50%" _hover={{color:"black", bgColor:"green.200"}}>Calculate</Button>
        </HStack>
        </Box>
        </Grid>
    </Flex>
  );
}
