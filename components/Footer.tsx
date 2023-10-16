import {
  Stack,
  Flex,
  Heading,
  Divider,
  Grid,
  GridItem,
  Text,
  Input,
  Button,
} from "@chakra-ui/react";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
const Footer = () => {
  return (
    <Stack>
      <Stack px={"200px"}>
        <Flex justify={"space-between"}>
          <Heading>Bandage</Heading>
          <Flex gap={4} color={"#23A6F0"}>
            <FaFacebook size={"24px"} />
            <FiInstagram size={"24px"} />
            <FaTwitter size={"24px"} />
          </Flex>
        </Flex>
        <Divider my={"50px"} />
        <Grid templateColumns={"repeat(5, 1fr)"} mb={"50px"}>
          <Stack>
            <Text fontSize={"16px"} fontWeight={"bold"} color={"#252B42"}>
              Company Info
            </Text>
            <Text fontSize={"14px"} fontWeight={"bold"} color={"#737373"}>
              About Us
            </Text>
            <Text fontSize={"14px"} fontWeight={"bold"} color={"#737373"}>
              Carrier
            </Text>
            <Text fontSize={"14px"} fontWeight={"bold"} color={"#737373"}>
              We are hiring
            </Text>
            <Text fontSize={"14px"} fontWeight={"bold"} color={"#737373"}>
              Blog
            </Text>
          </Stack>
          <Stack>
            <Text fontSize={"16px"} fontWeight={"bold"} color={"#252B42"}>
              Legal
            </Text>
            <Text fontSize={"14px"} fontWeight={"bold"} color={"#737373"}>
              About Us
            </Text>
            <Text fontSize={"14px"} fontWeight={"bold"} color={"#737373"}>
              Carrier
            </Text>
            <Text fontSize={"14px"} fontWeight={"bold"} color={"#737373"}>
              We are hiring
            </Text>
            <Text fontSize={"14px"} fontWeight={"bold"} color={"#737373"}>
              Blog
            </Text>
          </Stack>
          <Stack>
            <Text fontSize={"16px"} fontWeight={"bold"} color={"#252B42"}>
              About Us
            </Text>
            <Text fontSize={"14px"} fontWeight={"bold"} color={"#737373"}>
              Business Marketing
            </Text>
            <Text fontSize={"14px"} fontWeight={"bold"} color={"#737373"}>
              User Analytic
            </Text>
            <Text fontSize={"14px"} fontWeight={"bold"} color={"#737373"}>
              Live Chat
            </Text>
            <Text fontSize={"14px"} fontWeight={"bold"} color={"#737373"}>
              Unlimited Support
            </Text>
          </Stack>
          <Stack>
            <Text fontSize={"16px"} fontWeight={"bold"} color={"#252B42"}>
              Resources
            </Text>
            <Text fontSize={"14px"} fontWeight={"bold"} color={"#737373"}>
              IOS & Android
            </Text>
            <Text fontSize={"14px"} fontWeight={"bold"} color={"#737373"}>
              Watch a Demo
            </Text>
            <Text fontSize={"14px"} fontWeight={"bold"} color={"#737373"}>
              Customers
            </Text>
            <Text fontSize={"14px"} fontWeight={"bold"} color={"#737373"}>
              API
            </Text>
          </Stack>
          <Stack>
            <Text fontSize={"16px"} fontWeight={"bold"} color={"#252B42"}>
              Get in Touch
            </Text>
            <GridItem colSpan={2}>
              <Flex justify={"center"}>
                <Input
                  placeholder="Enter Email"
                  w={"200px"}
                  h={"48px"}
                  bg={"gray.100"}
                />
                <Button colorScheme="twitter" size={"lg"} px={"30px"}>
                  Subscribe
                </Button>
              </Flex>
              <Text fontSize={"sm"} color={"#737373"}>
                Lore imp sum dolor Amit
              </Text>
            </GridItem>
          </Stack>
        </Grid>
      </Stack>
      <Flex bg={"gray.100"} py={"20px"}>
        <Text
          ml={"200px"}
          color={"#737373"}
          fontWeight={"bold"}
          fontSize={"sm"}
        >
          Made With Love By Finland All Right Reserved{" "}
        </Text>
      </Flex>
    </Stack>
  );
};

export default Footer;
