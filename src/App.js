import './App.css';
import {ChakraProvider} from "@chakra-ui/react"
import { HashLink } from "react-router-hash-link";
import Header from './components/Header'
import EligibleCalc from './components/EligibleCalc';
import LegalFeeStampCalc from './components/LegalFeeStampCalc';
import {
  Center,
  Text,
  Button,
  HStack
} from "@chakra-ui/react";
import MOT from './components/MOT';
import LoanRepayCalc from './components/LoanRepayCalc'

function App() {
  return (
    <ChakraProvider>
      <Header/>

      <Center flexDir="column" pt="80px" w="100%" h="3vh" bgColor="transparent">
      <Text fontWeight="700" fontSize="3xl" color="black">Loan Calculators</Text>
      <br/>
      <HStack>
      <Button marginInline={2}>
          <HashLink smooth to="/#eligible-calc">
          Loan Eligible
          </HashLink>
        </Button>
        <Button marginInline={2}>
          <HashLink smooth to="/#legal-fee-calc">
          Legal Fees & Stamp
          </HashLink>
        </Button>
        <Button marginInline={2}>
          <HashLink smooth to="/#mot-calc">
          MOT
          </HashLink>
        </Button>
        <Button marginInline={2}>
          <HashLink smooth to="/#mot-calc">
          Loan Repayment 
          </HashLink>
        </Button>
      </HStack>
      </Center>


      <Center pt="80px" flexDir="column" w="100%" minW="300px" px="28%" h="100%" bgColor="transparent">
      <section id="eligible-calc">
      <EligibleCalc/>
      </section>
      <br></br>
      <section id="legal-fee-calc">
      <LegalFeeStampCalc/>
      </section>
      <br></br>
      <section id="mot-calc">
      <MOT/>
      </section>
      <br></br>
      {/* <section id="loan-repay-calc"> */}
      <LoanRepayCalc/>
      {/* </section> */}
      </Center>
    </ChakraProvider>
  );
}

export default App;
