import React from "react";
import style from "./Header.module.css";

const Header = () => {
  return (
    <div className={style.mainDiv}>
      <div className={style.icons}></div>
      <img
        src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/bluemercury-logo_1216x.png?v=1648743182"
        className={style.logo}
        alt="bluemercury-logo"
      />

      <div className={style.navTitle}>
        <header className={style.header}>
          <ul className={style.headings}>
           
            <li className={style.drop_one} style={{marginLeft: "40px"}}>
              <span>SHOP</span>
              <div className={style.menu_experiment}>
              {" "}
              {/* Visible on hover */}
              <div className={style.menu_one}>
                <ul className={style.menu1_ul}>
                  <h4 style={{ color: "blue", fontWeight: "600" }}>
                    SKIN CARE
                  </h4>
                  <li>MAKEUP</li>
                  <li>HAIR</li>
                  <li>BATH & BODY</li>
                  <li>FRAGRANCE</li>
                  <li>TOOLS & ACCESSORIES</li>
                  <li>HOME & LIFESTYLE</li>
                  <li>SUN CARE</li>
                  <li>MEN</li>
                  <li>GIFTS</li>
                  <li>BEST SELLERS</li>
                  <li>WELLNESS</li>
                  <li>FREE GIFTS</li>
                </ul>

                <ul className={style.menu1_ul}>
                  <h4 style={{ color: "blue", fontWeight: "600" }}>
                    BY CATEGORY
                  </h4>
                  <li>Shop All</li>
                  <li>Cleansers</li>
                  <li>Exfoliators & Peels</li>
                  <li>Eye Care</li>
                  <li>Lip Care</li>
                  <li>Masks</li>
                  <li>Moisturizers</li>
                  <li>Sun Care</li>
                  <li>Tools & Devices</li>
                  <li>Treatment & Serums</li>
                  <li>Vitamin & Supplements</li>
                  <li>Value & Gift Sets</li>
                </ul>

                <ul className={style.menu1_ul}>
                  <h4 style={{ color: "blue", fontWeight: "600" }}>BY BRAND</h4>
                  <li>111Skin</li>
                  <li>Augustinus Bader</li>
                  <li>Dr. barbara Strum</li>
                  <li>EltaMD</li>
                  <li>IS Clinical</li>
                  <li>Kiehl's</li>
                  <li>La Mer</li>
                  <li>M-61</li>
                  <li>OSEA</li>
                  <li>Revive</li>
                  <li>SkinCeuticals</li>
                  <li>Tata Harper</li>
                </ul>

                <ul className={style.menu1_ul}>
                  <img
                    src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/pgp_nav_303x303.jpg?v=1656522596"
                    alt="m-61 peel pac"
                  />
                  <h4 style={{ color: "black", fontWeight: "600" }}>
                    Best Seller: M-61 PowerGlow® Peel
                  </h4>
                  <p>
                    The 1-step exfoliating glowpeel that resurfaces, clarifies
                    and firms
                  </p>
                </ul>
              </div>
            </div>

            </li>
            
            <li className={style.drop_two}>
            <span>NEW!</span>
            <div className={style.menu_experiment}>
              {" "}
              {/* Visible on hover */}
              <div className={style.menu_one}>
                <ul className={style.menu1_ul}>
                  <h4 style={{ color: "blue", fontWeight: "600" }}>
                    SKIN CARE
                  </h4>
                  <li>MAKEUP</li>
                  <li>HAIR</li>
                  <li>BATH & BODY</li>
                  <li>FRAGRANCE</li>
                  <li>TOOLS & ACCESSORIES</li>
                  <li>HOME & LIFESTYLE</li>
                  <li>SUN CARE</li>
                  <li>MEN</li>
                  <li>GIFTS</li>
                  <li>BEST SELLERS</li>
                  <li>WELLNESS</li>
                  <li>FREE GIFTS</li>
                </ul>

                <ul className={style.menu1_ul}>
                  <h4 style={{ color: "blue", fontWeight: "600" }}>
                    BY CATEGORY
                  </h4>
                  <li>Shop All</li>
                  <li>Cleansers</li>
                  <li>Exfoliators & Peels</li>
                  <li>Eye Care</li>
                  <li>Lip Care</li>
                  <li>Masks</li>
                  <li>Moisturizers</li>
                  <li>Sun Care</li>
                  <li>Tools & Devices</li>
                  <li>Treatment & Serums</li>
                  <li>Vitamin & Supplements</li>
                  <li>Value & Gift Sets</li>
                </ul>

                <ul className={style.menu1_ul}>
                  <h4 style={{ color: "blue", fontWeight: "600" }}>BY BRAND</h4>
                  <li>111Skin</li>
                  <li>Augustinus Bader</li>
                  <li>Dr. barbara Strum</li>
                  <li>EltaMD</li>
                  <li>IS Clinical</li>
                  <li>Kiehl's</li>
                  <li>La Mer</li>
                  <li>M-61</li>
                  <li>OSEA</li>
                  <li>Revive</li>
                  <li>SkinCeuticals</li>
                  <li>Tata Harper</li>
                </ul>

                <ul className={style.menu1_ul}>
                  <img
                    src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/pgp_nav_303x303.jpg?v=1656522596"
                    alt="m-61 peel pac"
                  />
                  <h4 style={{ color: "black", fontWeight: "600" }}>
                    Best Seller: M-61 PowerGlow® Peel
                  </h4>
                  <p>
                    The 1-step exfoliating glowpeel that resurfaces, clarifies
                    and firms
                  </p>
                </ul>
              </div>
            </div>
            </li>

            <li className={style.drop_two}>
            <span>BRANDS</span>
            </li>

            <li className={style.drop_two}>
            <span>EXPLORE</span>
            </li>

            <li className={style.drop_two}>
            <span>EVENTS</span>
            </li>

            <li className={style.drop_two}>
            <span>BLUEREWARDS</span>
            </li>

            <li className={style.drop_two} style={{marginRight: "0px"}}>
            <span>BEAUTY ALFRESCO</span>
            </li>
            
          </ul>
        </header>
      </div>
    </div>
  );
};

export default Header;
