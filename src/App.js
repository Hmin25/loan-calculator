import './App.css';
import {ChakraProvider} from "@chakra-ui/react"
import Header from './components/Header'
import EligibleCalc from './components/EligibleCalc';
import LegalFeeStampCalc from './components/LegalFeeStampCalc';
import {
  Center,
  Text,
  Spacer,
  Flex
} from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Header/>

      <Center pt="50px" w="100%" h="3vh" bgColor="transparent">
      <Text fontWeight="700" fontSize="3xl" color="black">Loan Calculators</Text>
      </Center>

      <Center pt="50px" flexDir="column" w="100%" minW="300px" px="28%" h="100%" bgColor="transparent">
      <EligibleCalc/>
      <br></br>
      <LegalFeeStampCalc/>
      </Center>
    </ChakraProvider>
  );
}

export default App;
