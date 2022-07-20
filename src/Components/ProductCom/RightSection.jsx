import React, { useState } from "react";
import {
  Box,
  Grid,
  GridItem,
  Heading,
  Select,
  Stack,
  Switch,
  Text,
} from "@chakra-ui/react";
import { Pagination } from "./Pagination";
import { ProductCard } from "./ProductCard";

export const RightSection = () => {
  const [curretpage, setcurretpage] = useState(1);

  const onPageChange = (direction) => {
    if (direction == "Prev") {
      setcurretpage(curretpage - 1);
    } else if (direction == "Next") {
      setcurretpage(curretpage + 1);
    }
  };

  return (
    <Box w="72%">
      <Box borderBottom={"1px solid"} h={"82px"}>
        <Stack direction="row" justifyContent={"space-between"}>
          <Heading>MAKEUP</Heading>
          <Stack direction={"row"} align="center" pt={"5"}>
            <Heading size={"md"}>SORT BY</Heading>
            <Stack spacing={3}>
              <Select variant="outline" placeholder="Outline">
                <option value="Featured">Featured</option>
                <option value="NewArrivals">New Arrivals</option>
                <option value="BestSellers">Best Sellers</option>
                <option value="PriceLowToHigh">Price, Low to High</option>
                <option value="PriceHighToLow">Price, High to Low</option>
              </Select>
            </Stack>
          </Stack>
        </Stack>
      </Box>

      <Stack direction="row" justifyContent="space-between" mt="2" mb={5}>
        <Heading size={"sm"}>0 FILTERS APPLIED</Heading>
        <Stack direction="row" align="center" gap="10px">
          <Text fontSize="sm" color={"#888c92"}>
            Select One to narrow results
          </Text>
          <Switch colorScheme="gray" />
          <Text fontSize="sm" color={"#888c92"}>
            1463 results
          </Text>
        </Stack>
      </Stack>
      <Grid templateColumns="repeat(4, 1fr)" gap={2} >
        <GridItem w="100%" h="350" bg="#e7e7e7">
            <ProductCard/>
        </GridItem>
        <GridItem w="100%" h="300" bg="blue.500" />
        <GridItem w="100%" h="300" bg="blue.500" />
        <GridItem w="100%" h="300" bg="blue.500" />
      </Grid>

      <Box w={"70%"} m={"20px auto"}>
        <Pagination
          total={10}
          selected={curretpage}
          onPageChange={onPageChange}
        />
      </Box>
    </Box>
  );
};
