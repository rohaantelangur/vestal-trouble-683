import { Box, Button, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";

export const AdditionalOffering = () => {
  return (
    <Box>
      <Box p={"5"} borderBottom={"1px solid #dcdcdc"}>
        <Text>Additional Offerings</Text>
        <Text
          mt={"2"}
          fontFamily={`"Montserrat Regular",sans-serif`}
          fontSize={"12px"}
          verticalAlign={"baseline"}
          lineHeight={"19px"}
          fontWeight={500}
          color={"gray"}
          ml="1px"
        >
          Based on the items in your bag, you've qualified for the following
          offers.
        </Text>
      </Box>
      <Box mt="2">
        <Stack
          mt="4"
          mb="4"
          gap={"10px"}
          direction="row"
          fontSize={"20px"}
          display="flex"
          fontWeight={400}
          color={"#12284c"}
          bgColor={"#f4fafc"}
          h="50px"
          fontFamily={`"Montserrat Regular",sans-serif`}
          borderBottom={"1px solid #dcdcdc"}
          justifyContent={"space-between"}
        >
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            gap={"20px"}
            mt="3"
          >
            <Text>BLUEREWARDS</Text>
            <Box width={"480px"} fontSize={"11px"}>
              <Text>
                JOIN OUR FREE LOYALTY PROGRAM FOR FREE SHIPPING ON THIS - AND
                ALL - ORDERS. PLUS, EARN $10 FOR EVERY $250 YOU SPEND!
              </Text>
            </Box>
          </Box>
          <Box display={"flex"} justifyContent={"space-between"} gap={"20px"}>
            <Button mt="1">Log IN</Button>
            <Button mt="1" bgColor={"#12284c"} w="190px" color="white">
              JOIN NOW
            </Button>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};
