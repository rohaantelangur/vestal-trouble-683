import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./SingleProduct.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../Redux/AppReducer/action";
import axios from "axios";
import { ProductAbout } from "./ProductAbout";

export const SingleProduct = () => {
  const { id } = useParams();
  const { category } = useParams();
  const product = useSelector((state) => state.Appreducer.products);
  console.log("product:", product);
  const [currentProduct, setProduct] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    if (product?.length === 0) {
      // dispatch(getProducts());
    }
  }, [product?.length, dispatch]);

  useEffect(() => {
    // if(id) {
    //   const temp = product?.find((item)=>item.category === category).find((item) => item.id === Number(id))
    //   temp && setProduct(temp)
    // }
  }, [product, id, category]);

  useEffect(() => {
    if ((category, id)) {
      axios
        .get(`http://localhost:8080/${category}/${id}`)
        .then((res) => {
          console.log("data", res.data);
          setProduct(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [category, id]);
  // }, [category, id])
  // https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-5060445300023-1.jpg?v=1656523237
  // currentProduct.images[0]?.src
  return (
    <div className={style.outerdiv}>
      <div className={style.mainDiv}>
        <div>
          {/* <img  className={style.img} src={`https:${currentProduct.images[0]?.src}`} alt="" /> */}
        </div>

        <div className={style.info}>
          <h2 className={style.type}>{currentProduct.type}</h2>

          <h1 className={style.title}>{currentProduct.title}</h1>
          <p className={style.sell}>BEST SELLER CONCIOUS BEAUTY</p>
          <span style={{ fontWeight: "bold", fontSize: "22px" }}>
            ₹ {currentProduct.price}{" "}
          </span>
          <span className={style.text}>
            4 interest-free payments of $20.50 with Klarna.
          </span>
          <div className={style.btnDiv}>
            <div className={style.btn}>ADD TO BAG </div>

            <div>
              <p> ₹ {currentProduct.price} </p>
            </div>
          </div>
        </div>
      </div>

      <div className={style.aboutDiv}>
        <ProductAbout/>
      </div>
    </div>
  );
};
