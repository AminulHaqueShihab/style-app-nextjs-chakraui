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
      <Stack alignItems={"center"}>
        <Text color={"#737373"} fontSize={"lg"}>
          WHAT WE DO
        </Text>

        <Heading
          // as={"h1"}
          fontSize={{ base: "3xl", md: "5xl", lg: "7xl" }}
          color={"#252B42"}
        >
          Innovation tailored for you
        </Heading>

        <Breadcrumb
          spacing="8px"
          separator={<FaGreaterThan color="gray.500" />}
          fontWeight={"bold"}
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

      <Grid templateColumns={"repeat(2, 1fr)"}>
        <GridItem mx={"auto"}>
          <Image
            src={"/assets/unsplash_Lks7vei-eAgimg1.png"}
            alt="Main Image"
          />
        </GridItem>
        <GridItem>
          <Grid
            templateColumns={"repeat(2, 1fr)"}
            // templateRows={"repeat(2, 1fr)"}
            gap={2}
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
