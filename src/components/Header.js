import React from 'react';
import {
    Flex,
    Button
  } from "@chakra-ui/react";

export default function Header() {
    return(
        <Flex w="100%" h="13vh" align="center" flexDir="row-reverse" bgColor="green.600">
            <Button color="white" mr="2%" bgColor="transparent" outlineColor="white" _hover={{bgColor:"transparent"}}>
            The Developer
            </Button>
        
        </Flex>
    );
}