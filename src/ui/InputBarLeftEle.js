import React from "react";
import { InputGroup, InputLeftAddon, Input, Flex, Spacer, Text } from "@chakra-ui/react";

export default function InputBarLeftEle({ setCurrentData, title, children }) {
  return (
    <Flex align="left" flexDir="column" pt="4%">
      <Text fontSize={["sm","sm","md","md"]} fontWeight="600">
        {title}
      </Text>
      <Spacer/>
      <InputGroup w="90%" minWidth="150px">
        <InputLeftAddon children={children} />
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
