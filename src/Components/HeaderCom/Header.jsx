import React from 'react';
import style from "./Header.module.css";

const Header = () => {
  return (
    <div className={style.mainDiv}>
      <div className={style.icons}></div>
      <img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/bluemercury-logo_1216x.png?v=1648743182" className={style.logo} alt="bluemercury-logo" />
      <div className={style.navTitle}>
        <nav>
          <div>SHOP</div>
          <div>NEW!</div>
          <div>BRANDS</div>
          <div>EXPLORE</div>
          <div>EVENTS</div>
          <div>BLUEREWARDS</div>
          <div>BEAUTY ALFRESCO</div>
        </nav>
      </div>
    </div>
  )
}

export default Header