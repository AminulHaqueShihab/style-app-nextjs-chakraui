import { Container, Image, Stack, Text, Flex } from "@chakra-ui/react";
import { FC } from "react";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
type MemberProps = {
  imgprop?: string;
};

const Member: FC<MemberProps> = ({ imgprop }) => {
  return (
    <Stack gap={5} alignItems={"center"}>
      <Image src={imgprop} alt="Hero" maxWidth={"full"} maxHeight={"231px"} />
      <Stack alignItems={"center"} gap={2}>
        <Text fontSize={"14px"} fontWeight={"bold"} color={"#252B42"}>
          Username
        </Text>
        <Text fontSize={"12px"} fontWeight={"bold"} color={"#737373"}>
          Profession
        </Text>
        <Flex gap={4} color={"#23A6F0"}>
          <FaFacebook size={"24px"} />
          <FiInstagram size={"24px"} />
          <FaTwitter size={"24px"} />
        </Flex>
      </Stack>
    </Stack>
  );
};

export default Member;
