"use client";
import {
  Container,
  Text,
  Heading,
  Box,
  Flex,
  Link,
  Grid,
  GridItem,
  Image,
  Stack,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import { FaGreaterThan } from "react-icons/fa";
export default function Hero() {
  return (
    <Flex
      alignItems={"center"}
      justifyItems={"center"}
      direction={"column"}
      w={"full"}
      gap={10}
    >
      <Stack alignItems={"center"} my={"40px"}>
        <Text color={"#737373"} fontSize={"18px"} fontWeight={"bold"}>
          WHAT WE DO
        </Text>

        <Heading
          // as={"h1"}
          fontSize={{ base: "40px", md: "50px", lg: "55px" }}
          color={"#252B42"}
          maxWidth={{ base: "300px", sm: "full" }}
          textAlign={"center"}
        >
          Innovation tailored for you
        </Heading>

        <Breadcrumb
          spacing="8px"
          separator={<FaGreaterThan color="gray.500" />}
          fontWeight={"bold"}
          mt={"25px"}
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="#" color={"#252B42"}>
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#" color={"#737373"}>
              Team
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Stack>

      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        gap={3}
      >
        <GridItem mx={"auto"}>
          <Image
            src={"/assets/unsplash_Lks7vei-eAgimg1.png"}
            alt="Main Image"
            // h={"280px"}
            // maxH={"auto"}
            // maxWidth={'auto'}
          />
        </GridItem>
        <GridItem>
          <Grid
            templateColumns={"repeat(2, 1fr)"}
            gap={3}
            // minH={"full"}
            // maxWidth={"full"}
          >
            <GridItem>
              <Image
                src={"/assets/unsplash_gMsnXqILjp4.png"}
                alt="Main Image"
              />
            </GridItem>
            <GridItem>
              <Image
                src={"/assets/unsplash_PSmDDeXaEWE.png"}
                alt="Main Image"
              />
            </GridItem>
            <GridItem>
              <Image
                src={"/assets/unsplash_1-aA2Fadydc.png"}
                alt="Main Image"
              />
            </GridItem>
            <GridItem>
              <Image
                src={"/assets/unsplash_mcSDtbWXUZU.png"}
                alt="Main Image"
              />
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </Flex>
  );
}
