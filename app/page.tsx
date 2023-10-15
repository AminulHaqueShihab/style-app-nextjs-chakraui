"use client";
import Action from "@/components/Action";
import Hero from "@/components/Hero";
import Team from "@/components/Team";
import Image from "next/image";
import {
  Heading,
  Flex,
  List,
  ListItem,
  Text,
  Button,
  Spacer,
} from "@chakra-ui/react";
export default function Home() {
  return (
    <>
      <Hero />
      <Team />
      <Action />
    </>
  );
}
