import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import style from "./SingleProduct.module.css";
import { useSelector, useDispatch } from 'react-redux';

export const SingleProduct = () => {

  const {id} = useParams();
  const product = useSelector((state) => state.Appreducer.products);
  const [currentProduct, setProduct] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if(id) {
      const temp = product?.find((product) => product.id === Number(id))
      temp && setProduct(temp) 
    }
  }, [product, id])

  return (
    <div className={style.mainDiv}>
        <div>
          <img src={currentProduct.image} alt="" />
        </div>

        <div></div>
    </div>
  )
}
