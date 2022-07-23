import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import style from "./SingleProduct.module.css";
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../Redux/AppReducer/action';
import axios from 'axios';

export const SingleProduct = () => {

  const { id } = useParams();
  const { category } = useParams();
  // const product = useSelector((state) => state.Appreducer.products);
  // console.log('product:', product)
  const [currentProduct, setProduct] = useState({});
  // const dispatch = useDispatch();
  console.log(category,id,currentProduct.images[0].src);

  useEffect(()=>{
    axios.get(`http://localhost:8080/${category}/${id}`).then((res)=>{
      setProduct(res.data)
    }).catch((err)=>{
      console.log(err);
    })

  },[])
  return (
    <div className={style.mainDiv}>
        <div>
          <img src={`https://www.${currentProduct.images[0].src}`} alt="" />
        </div>
        <div></div>
    </div>
  )
}
