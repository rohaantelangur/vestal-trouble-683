import {
  Box,
  Button,
  Heading,
  Img,
  Text,
  ThemeProvider,
  CSSReset,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";

export const ProductCard = () => {
  return (
    <Box>
      <Box mt={1} align="right">
        <Box w="30px" h="30px" mr={1} align="center">
          <AiOutlineHeart style={{ fontSize: "30px" }} />
        </Box>
      </Box>
      <Img
        src="https://picsum.photos/200"
        w="100%"
        h="200px"
        alt=""
        srcset=""
      />
      <Box align="center" mt={"-10"}>
        <Button borderRadius={0} w="98%" variant='outline'>
          Queck View
        </Button>
        <Text fontSize={"lg"} fontWeight={"600"}>
          I'm a Heading
        </Text>
        <Text fontSize={"md"} fontWeight={"200"}>
          I'm a Heading
        </Text>
        <Text fontSize={"md"} fontWeight={"600"}>
          $40
        </Text>
        <Stack direction={"row"} justify="center">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </Stack>
      </Box>
    </Box>
  );
};
