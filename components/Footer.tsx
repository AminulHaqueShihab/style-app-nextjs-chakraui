import { Stack, Flex, Heading } from '@chakra-ui/react'
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
const Footer = () => {
  return (
    <Stack>
      <Flex justify={'space-between'}>
        <Heading>Bandage</Heading>
        <Flex gap={4} color={"#23A6F0"}>
          <FaFacebook size={"24px"} />
          <FiInstagram size={"24px"} />
          <FaTwitter size={"24px"} />
        </Flex>
      </Flex>
    </Stack>
  );
}

export default Footer