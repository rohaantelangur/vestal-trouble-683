import { WarningIcon } from "@chakra-ui/icons";
import { Box, Heading, HStack, Text } from "@chakra-ui/react";
import React from "react";

export const MainCartBag = () => {
  return (
    <Box>
      <Box p={10} ml={"8%"} fontFamily={`"Montserrat Regular",sans-serif`}>
        <Heading
          fontWeight={500}
          fontStyle="normal"
          fontSize={"28px"}
          lineHeight={"46.2px"}
          transition={"color .2s ease-in-out"}
          letterSpacing={"3px"}
          color={"#12284c"}
          textTransform={"uppercase"}
        >
          YOUR BAG
        </Heading>
      </Box>
      <HStack spacing={"10px"} justifyContent={"flex-end"} h="50px" mr={"6%"}  >
        <Box
          gap={"10px"}
          width="400px"
          fontSize={"20px"}
          display="flex"
          fontWeight={400}
          color={"#12284c"}
          bgColor={"#f4fafc"}
          h="50px"
          fontFamily={`"Montserrat Regular",sans-serif`}
         pl={10}
        >
          <Box mt="2">
            <WarningIcon color="red.500" w={5} h={5} />
          </Box>
          <Text mt="3" fontSize={"14px"} verticalAlign={"baseline"}>
            Your Order Qualifies for Free Ground Shipping!
          </Text>
        </Box>
      </HStack>
    </Box>
  );
};
