"use client";
import { Stack, Heading, Grid } from "@chakra-ui/react";
import Member from "./Member";
import img1 from "/assets/team-1-user-1.jpg";
export default function Team() {
  return (
    <Stack alignItems={"center"} gap={5}>
      <Heading
        m={"80px"}
        color={"#252B42"}
        fontSize={"45px"}
        textAlign={"center"}
      >
        Meet Our Team
      </Heading>

      <Grid
        templateColumns={{ md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
        rowGap={"80px"}
        columnGap={"30px"}
      >
        <Member imgprop={"/assets/team-1-user-1.jpg"} />
        <Member imgprop={"/assets/team-1-user-2.jpg"} />
        <Member imgprop={"/assets/team-1-user-3.jpg"} />
        <Member imgprop={"/assets/team-1-user-4.jpg"} />
        <Member imgprop={"/assets/team-1-user-5.jpg"} />
        <Member imgprop={"/assets/team-1-user-6.jpg"} />
        <Member imgprop={"/assets/team-1-user-7.jpg"} />
        <Member imgprop={"/assets/team-1-user-8.jpg"} />
        <Member imgprop={"/assets/team-1-user-9.jpg"} />
      </Grid>
    </Stack>
  );
}
