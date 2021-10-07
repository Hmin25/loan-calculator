import React, { useState } from "react";
import { Flex, Text, Image, Grid, Box, Button, VStack, Spacer, HStack } from "@chakra-ui/react";
import Mot from "../assets/mot.png";
import InputBarLeftEle from "../ui/InputBarLeftEle";
import InputBarRightEle from "../ui/InputBarRightEle";

export default function MOT() {
  const [currentNetIncome, setCurrentNetIncome] = useState(null);

  return (
    <Flex
      p="5"
      flexDir="column"
      w="100%"
      minW="300px"
      h={["930px","4xl","lg","lg"]}
      minH="500px"
      borderRadius="10px"
      borderColor="#192f60"
      borderWidth="2px"
    >
      <HStack pl={3} spacing="5">
        <Image w="55px" h="45px" src={Mot} />
        <Text fontSize="xl" fontWeight="600">
          Memorandum of Transfer (MOT) Calculator
        </Text>
      </HStack>

      <Grid overflowY="hidden" h="100%" pt={5} templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)","repeat(2, 1fr)"]} gap={8}>
        <Box w="100%" h="100%">
        <InputBarLeftEle setCurrentData={setCurrentNetIncome} title="Monthly Net Income (After deduction of EPF, Socso)" children="RM"/>
        <InputBarLeftEle setCurrentData={setCurrentNetIncome} title="Monthly Net Income (After deduction of EPF, Socso)" children="RM"/>
        <InputBarLeftEle setCurrentData={setCurrentNetIncome} title="Monthly Net Income (After deduction of EPF, Socso)" children="RM"/>
        <InputBarRightEle setCurrentData={setCurrentNetIncome} title="Monthly Net Income (After deduction of EPF, Socso)" children="%"/>
        <InputBarRightEle setCurrentData={setCurrentNetIncome} title="Monthly Net Income (After deduction of EPF, Socso)" children="months"/>
        </Box>
        <VStack align="right" w="100%" h="70%" flexDir="column">
        <Box w="100%" borderRadius="5px" h="300px" bg="#ebf6f7" />
        <Spacer/>
        <Button bgColor="#192f60" color="white" h="50px" w="100%" _hover={{color:"black", bgColor:"green.200"}}>Calculate</Button>
        </VStack>
        </Grid>
    </Flex>
  );
}