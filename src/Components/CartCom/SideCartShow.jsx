import { Box, Button, Image, SlideFade, Stack, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

import { useDispatch } from "react-redux";
import { DeleteIcon } from "@chakra-ui/icons";
import { deleteitem, getCart } from "../../Redux/CartReducer/action";
export const SideCartShow = (props) => {
  const { price, ratings, title, quantity,vendor, id } = props;
  const { src } = props.images[0];
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();


  const handdleUpdata = async () => {
    await axios
      .patch(`http://localhost:8080/addtocart/${id}`, {
        quantity: count,
        priceMax: count * price,
      })
      .then(() => getCart(dispatch));
  };
  const handlleDelete = async () => {
    console.log("hai delete");
    console.log(id);
    deleteitem(dispatch, id).then(() => {
      getCart(dispatch);
    });
  };

  return (
    <Box>
      <Box
        display={"flex"}
        flexWrap={"wrap"}
        gap="20px"
        justifyContent={"space-around"}
        
      >
        <Box w={"120px"} h="150px">
          <Image src={src} />
        </Box>
        <Box width={"180px"}>
          <Box overflow={"hidden"} whiteSpace={"nowrap"}>
            <Text>{title}</Text>
            <Text>{vendor}</Text>
          </Box>
          <Box display={"flex"} justifyContent="space-between">
            <Text color={"gray"}>
              ₹.
              {(quantity * price).toLocaleString("hi-IN")}.00
            </Text>
            <Text
            mt={1}
              color={"gray"}
              fontFamily={"Roboto, sans-serif"}
              fontSize={"12px"}
              textAlign="right"
              textDecoration="line-through"
            >
              ₹.
              {(price / 100).toLocaleString("hi-IN")}.00
            </Text>
          </Box>
        </Box>
        <Box
          display={"block"}
          h="30px"
          mt="10px"
          w={"100px"}
          justifyContent="space-around"
          textAlign="center"
        >
          <Box  display={"flex"}
          h="30px"
          mt="10px"
          w={"100px"}
          justifyContent="space-around"
          textAlign="center">
          <Button
          bgColor="#f8f8f8"
          fontSize={"20px"}
          borderRadius='0px'
           border="1px black solid"
           w={"40px"}
            h="30px"
            _hover={{
              cursor: "pointer"
            }}
            onClick={() => handdleUpdata(setCount(count - 1))}
          >
            -
          </Button>
          <Box bgColor="#ffffff" border="1px black solid" h="30px" w="40px" m={"auto"}    >
            {quantity}
          </Box>
          <Button
            borderRadius='0px'
            bgColor="#f8f8f8"
            fontSize={"20px"}
          border="1px black solid"
          w={"40px"}
            h="30px"
            onClick={() => handdleUpdata(setCount(count + 1))}
          
            _hover={{
              cursor: "pointer"
            }}>
            +
          </Button>
          </Box>
         
<Box>
<DeleteIcon
            onClick={handlleDelete}
            ml="2"
            h={4}
            w={4}
            alignSelf={"center"}
          />
</Box>
         
        </Box>
      </Box>
    </Box>
  );
};
