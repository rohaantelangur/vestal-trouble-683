
import React, { useEffect } from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Box,
    Icon,
    Heading,
  } from "@chakra-ui/react";

  import { useDispatch, useSelector } from "react-redux";
  
 
  import { useNavigate } from "react-router-dom";
import { SideCartShow } from './SideCartShow';
import { getCart } from '../../Redux/CartReducer/action';


export const Samplecart = () => {
    const navigate = useNavigate();
    const AddtoCart = useSelector((state) => state.Cartreducer.AddtoCart);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const handleClick = (newSize) => {
      onOpen();
    };
    let dispatch=useDispatch()
    useEffect(() => {
      
      getCart(dispatch);
    }, [dispatch]);
    let countt=0
  
  
  let totalPrice=0
  return (
    <Box>
    <Button bg={"white"} onClick={() => handleClick("md")} key={"md"} m={4}>
      YOUR BAG
    </Button>
    <Drawer onClose={onClose} isOpen={isOpen} size={"md"}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader display={"flex"}><Heading ml="3">{AddtoCart.length} YOUR BAG</Heading> </DrawerHeader>
        <Box borderBottom={"1px solid gray"}></Box>
        <DrawerBody>
          <Box>
              {
                  AddtoCart.map((item)=>
                  {
                    totalPrice+=item.priceMax
                      return  <SideCartShow key={item.id} {...item} />
                  })
              }
         
          </Box>
          <Button
          rounded={"60px"}
          w={"80%"}
          mt={8}
          size={"md"}
          py={"6"}
          bg="#3c07ff"
          fontFamily={"Roboto, sans-serif"}
          color={"white"}
          textTransform={"uppercase"}
          _hover={{
            transform: "translateY(2px)",
            boxShadow: "lg",
          }}
          
          onClick= {()=> navigate("/mainCartBag")} >
          VIEW BAG {(totalPrice).toLocaleString("hi-IN")}
        </Button>
         
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  </Box>
  )
}
