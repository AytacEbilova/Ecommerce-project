import React, { useContext } from "react";
import styles from "../Header/header.module.scss";
import { Link } from "react-router-dom";
import { FavContext } from "../../context/wishlistContext";
import { BasketContext } from "../../context/basketContext";
const Header = () => {
    const{fav}=useContext(FavContext)
    const{basket}=useContext(BasketContext)
  return (
    <header>
      <div className="container">
        <div className={styles.all}>
          <div className={styles.logo}>
            <h2>SHOPPERS</h2>
          </div>
          <div className={styles.right}>
            <ul>
              <li>
                <Link to={"/"} className={styles.link}>
                  Home
                </Link>
              </li>
              <li>
                <Link to={"add"} className={styles.link}>
                  Add
                </Link>
              </li>
              <li>
                <Link to={"basket"} className={styles.link}>
                  Basket <sup>{basket.length}</sup>
                </Link>
              </li>
              <li>
                <Link to={"wishlist"} className={styles.link}>
                  Wishlist <sup>{fav.length}</sup>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
