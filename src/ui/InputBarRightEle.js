import React from "react";
import { InputGroup, InputRightElement, Input, Flex, Spacer, Text } from "@chakra-ui/react";

export default function InputBarRightEle({ setCurrentData, title, children }) {
  return (
    <Flex align="left" flexDir="column" pt="4%">
      <Text fontSize={["sm","sm","md","md"]} fontWeight="600">
        {title}
      </Text>
      <Spacer/>
      <InputGroup w="90%" minWidth="150px">
        <InputRightElement children={children} />
        <Input
          type="number"
          onChange={(e) => {
            setCurrentData(e.target.value);
          }}
        ></Input>
      </InputGroup>
    </Flex>
  );
}
