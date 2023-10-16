// "use client";
import {
  Heading,
  Flex,
  List,
  ListItem,
  Text,
  Button,
  Spacer,
} from "@chakra-ui/react";
// import { FaRegCalendarAlt } from "react-icons/fa";
// import { FiEdit, FiAtSign } from "react-icons/fi";
import { BiRightArrowAlt } from "react-icons/bi";
import Link from "next/link";
export default function Navbar() {
  return (
    <Flex
      justify={"space-between"}
      py={8}
      px={"59px"}
      alignItems={"center"}      
      // display={{ base: "none" }}
    >
      <Flex alignItems={"center"} gap={"180px"}>
        <Heading fontWeight={"bold"}>Bandage</Heading>
        <Flex
          alignItems={"center"}
          gap={4}
          fontSize={"sm"}
          fontWeight={"bold"}
          color={"#737373"}
        >
          <Link href={'/'}>HOME</Link>
          <Link href={'/'}>PRODUCT</Link>
          <Link href={'/'}>PRICING</Link>
          <Link href={'/'}>CONTACT</Link>
        </Flex>
      </Flex>

      <Spacer />
      <Flex alignItems={"center"} gap={8}>
        <Text color={"#23A6F0"} fontWeight={"bold"} cursor={'pointer'}>
          LogIn
        </Text>
        <Button
          colorScheme="twitter"
          fontSize={"lg"}
          py={7}
          px={8}
          boxShadow={"lg"}
          rightIcon={<BiRightArrowAlt size="24px" />}
        >
          Become a Member
        </Button>
      </Flex>
    </Flex>
  );
}
