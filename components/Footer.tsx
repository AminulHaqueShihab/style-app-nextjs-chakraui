"use client";
import { useState } from "react";
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
  Show,
  InputGroup,
  InputRightElement,

} from "@chakra-ui/react";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
const Footer = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <Stack>
      <Stack px={{ base: "40px", sm: "75px", md: "150px", lg: "200px" }}>
        <Flex
          justify={"space-between"}
          direction={{ base: "column", sm: "row" }}
          gap={3}
        >
          <Heading>Bandage</Heading>
          <Flex gap={4} color={"#23A6F0"}>
            <FaFacebook size={"24px"} />
            <FiInstagram size={"24px"} />
            <FaTwitter size={"24px"} />
          </Flex>
        </Flex>
        <Divider my={"50px"} />
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(5, 1fr)",
          }}
          mb={"50px"}
          gap={8}
        >
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
            <GridItem >
              {/* <InputGroup size="lg">
                <Input
                  
                  type={'email'}
                  placeholder="Enter Email"
                />
                <InputRightElement>
                  <Button size="lg" colorScheme="twitter" w={'100px'}>
                    Subscribe
                  </Button>
                </InputRightElement>
              </InputGroup> */}
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
      <Flex bg={"gray.100"} py={"20px"} maxWidth={"full"} alignItems={"center"}>
        <Text
          // ml={{base:'unset', lg:'200px'}}
          textAlign={"center"}
          color={"#737373"}
          fontWeight={"bold"}
          fontSize={"sm"}
          mx={{ base: "auto", lg: "200px" }}
        >
          Made With Love By{" "}
          <Show below="sm">
            <br />
          </Show>{" "}
          Finland All Right Reserved{" "}
        </Text>
      </Flex>
    </Stack>
  );
};

export default Footer;
