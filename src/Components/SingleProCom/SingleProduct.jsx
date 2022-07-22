import React from 'react';
import { useParams } from 'react-router-dom';
import style from "./SingleProduct.module.css";
import { useSelector } from 'react-redux';

export const SingleProduct = () => {

  const {id} = useParams();
  // const product = useSelector((state) => state.)

  return (
    <div className={style.mainDiv}>
        <div></div>
        <div></div>
    </div>
  )
}
