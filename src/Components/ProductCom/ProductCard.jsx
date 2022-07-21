import {
  Box,
  Button,
  Img,
  Text,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { AiFillStar, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { ADD_TO_WISH_LIST_SUCCESS } from "../../Redux/WishListReducer/actionType";

export const ProductCard = (props) => {
  const dispatch = useDispatch();
  const WithListData = useSelector((store)=>store.WishList.WishListData);
  const ProId = useSelector((store)=>store.WishList.ProId);

  const AddToFevrate = () => {
    let newWishList=[...WithListData]
    let newProId=[...ProId]
    if(ProId.includes(props.item.id)){
      newProId.splice(newProId.indexOf(props.item.id),1)
      newWishList.splice(ProId.indexOf(props.item.id),1)
    }else{
      newProId=[...ProId,props.item.id]
      newWishList = [...WithListData,props.item]
    }

    const payload ={
      WithListData:newWishList,
      ProId:newProId
    }
    dispatch({type:ADD_TO_WISH_LIST_SUCCESS, payload})
  }
  return (
    <Box>
      <Box mt={1} align="right">
        <Box w="30px" h="30px" mr={1} align="center" onClick={()=>AddToFevrate()} cursor={"pointer"}>
          {ProId.includes(props.item.id)?
          <AiFillHeart style={{ fontSize: "30px", color:"red" }}/>:
          <AiOutlineHeart style={{ fontSize: "30px" }} />
          }
        </Box>
      </Box>
      <Img
        cursor={"pointer"}
        src={props.item.images[0].src}
        w="100%"
        h="200px"
        alt=""
        srcSet=""
      />
      <Box align="center" mt={"-10"}>
        <Button borderRadius={0} w="98%" variant='outline'>
          Queck View
        </Button>
        <Text fontSize={"lg"} fontWeight={"600"}>
        {props.item.type}
        </Text>
        <Text fontSize={"md"} fontWeight={"200"}>
        {props.item.title}
        </Text>
        <Text fontSize={"md"} fontWeight={"600"}>
        ₹ {props.item.price}
        </Text>
        <Stack direction={"row"} justify="center">
          <AiFillStar color="gold"/>
          <AiFillStar color="gold"/>
          <AiFillStar color="gold"/>
          <AiFillStar color="gold"/>
          <AiFillStar color="gold"/>
        </Stack>
      </Box>
    </Box>
  );
};
