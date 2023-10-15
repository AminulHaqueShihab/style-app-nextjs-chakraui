import { Stack, Heading, Text, Button, Flex } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

const Action = () => {
  return (
    <Stack align={"center"} margin={"170px"} gap={8}>
      <Heading color={"#252B42"}>Start your 14 days free trial</Heading>
      <Flex
        fontSize={"14px"}
        w={"40vh"}
        alignItems={"center"}
        justify={"center"}
        textAlign={"center"}
      >
        <Text alignItems={"center"} color={"#737373"}>
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent.
        </Text>
      </Flex>

      <Button colorScheme="twitter" size={"lg"} fontSize={"14px"}>
        Try it free now
      </Button>
      <Flex gap={7} color={"#23A6F0"}>
        <FaTwitter size={"28px"} />
        <FaFacebook size={"28px"} />
        <FiInstagram size={"28px"} />
        <FaLinkedin size={"28px"} />
      </Flex>
    </Stack>
  );
};

export default Action;
