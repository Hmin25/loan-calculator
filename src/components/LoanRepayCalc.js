import React, { useState } from "react";
import {
  Flex,
  Text,
  Image,
  Grid,
  Box,
  Button,
  VStack,
  Spacer,
  HStack,
  Checkbox,
} from "@chakra-ui/react";
import loanRepay from "../assets/loanRepay.png";
import InputBarLeftEle from "../ui/InputBarLeftEle";

export default function LoanRepayCalc() {
  const [currentNetIncome, setCurrentNetIncome] = useState(null);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Flex
      p="5"
      flexDir="column"
      w="100%"
      minW="300px"
      h={["3xl", "3xl", "sm", "sm"]}
      minH="430px"
      borderRadius="10px"
      borderColor="none"
      borderWidth="2px"
    >
      <HStack pl={3} spacing="5">
        <Image w="50px" h="45px" src={loanRepay} />
        <Text fontSize="xl" fontWeight="600">
          Loan Repayment Calculator
        </Text>
      </HStack>

      <Grid
        overflowY="hidden"
        h="100%"
        pt={5}
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(2, 1fr)",
        ]}
        gap={8}
      >
        <Box w="100%" h="100%">
          <InputBarLeftEle
            setCurrentData={setCurrentNetIncome}
            title="Monthly Net Income (After deduction of EPF, Socso)"
            children="RM"
          />
          <InputBarLeftEle
            setCurrentData={setCurrentNetIncome}
            title="Monthly Net Income (After deduction of EPF, Socso)"
            children="RM"
          />
          <InputBarLeftEle
            setCurrentData={setCurrentNetIncome}
            title="Monthly Net Income (After deduction of EPF, Socso)"
            children="RM"
          />
          <Text pt="4%" fontSize={["sm", "sm", "md", "md"]} fontWeight="600">
          Is the Loan Subsidized
          </Text>
          <Checkbox onChange={(e) => setIsChecked(e.target.checked)}>
            Yes
          </Checkbox>
        </Box>
        <VStack align="right" w="100%" h="70%" flexDir="column">
          <Box w="100%" borderRadius="5px" h="300px" bg="#ebf6f7" />
          <Spacer />
          <Button
            bgColor="#192f60"
            color="white"
            h="50px"
            w="100%"
            _hover={{ color: "black", bgColor: "green.200" }}
          >
            Calculate
          </Button>
        </VStack>
      </Grid>
    </Flex>
  );
}
