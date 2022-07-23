import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import style from "./SingleProduct.module.css";
import axios from 'axios';
import { Box, Image, Img, Text } from '@chakra-ui/react';

export const SingleProduct = () => {

  const { id } = useParams();
  const { category } = useParams();
  const [currentProduct, setcurrentProduct] = useState({});
  const [currentImage1, setcurrentImage1] = useState("");
  const [currentImage2, setcurrentImage2] = useState("");
  

  const  getData = ()=>{
    axios.get(`http://localhost:8080/${category}/${id}`)
    .then((res)=>{
      setcurrentProduct(res.data)
      setcurrentImage1(res.data.images[0].src)
      setcurrentImage2(res.data.images[1].src)
    }).catch((err)=>{
      console.log(err);
    })
  }

  useEffect(()=>{
  getData()
  console.log(currentProduct);
  },[ ])
  return (
    <div className={style.mainDiv}>
        <div>
          {currentProduct.length > 0 || 
          <Box>
          <Img
        cursor={"pointer"}
        src={currentImage1}
        w="100%"
        h="200px"
        alt=""
        srcSet=""
        />
        <Img
        cursor={"pointer"}
        src={currentImage2}
        w="100%"
        h="200px"
        alt=""
        srcSet=""
        />

          <Text>{currentProduct.title}</Text>
          </Box>
          }
        </div>
        <div></div>
    </div>
  )
}
