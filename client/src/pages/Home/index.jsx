import React, { useContext } from "react";
import styles from "../Home/home.module.scss";
import { Button, Col, Divider, Row } from "antd";
import { useGetProductsQuery } from "../../service/productApi";
import { useState } from "react";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { FavContext } from "../../context/wishlistContext";
import { BasketContext } from "../../context/basketContext";
import { TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {Helmet} from "react-helmet";
const Home = () => {
  const { data: products } = useGetProductsQuery();
  const [search, setSearch] = useState("");
  const { fav, setFav } = useContext(FavContext);
  const { basket, setBasket } = useContext(BasketContext);
  const [sort, setSort] = useState("");
  let filteredData = products
    ? products.data.map((product) => {
        if (product.title.trim().toLowerCase().includes(search.toLowerCase())) {
          return product;
        }
      })
    : [];

  if (sort == "A-Z") {
    filteredData = filteredData.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sort == "Z-A") {
    filteredData = filteredData.sort((b, a) => b.title.localeCompare(a.title));
  }
  const handleWishlist = (product) => {
    let addToFav = fav?.find((x) => x._id == product._id);
    console.log(addToFav);
    console.log(fav);
    if (!addToFav) {
      setFav([...fav, product]);
      localStorage.setItem("fav", JSON.stringify([...fav, product]));
    } else {
      let uptadeFav = fav.filter((x) => x._id != product._id);
      setFav(uptadeFav);
      localStorage.setItem("fav", JSON.stringify(uptadeFav));
    }
  };
  console.log(filteredData);
  return (
    <>
    <div className="application">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Aytac Shop Site</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            ...
        </div>
      <section>
        <div className={styles.homePage}>
          <div className="container">
            <div className={styles.text}>
              <h2>
                Finding Your <br /> Perfect Shoes
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit.
                Phasellus at iaculis quam. Integer accumsan <br /> tincidunt
                fringilla.
              </p>
              <button>Shop Now</button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={styles.sect2}>
          <div className="container">
            <Row
              gutter={{
                xs: 8,
                sm: 16,
                md: 24,
                lg: 32,
              }}
            >
              <Col
                className="gutter-row"
                span={8}
                xs={24}
                sm={24}
                lg={8}
                md={12}
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJGUpOevIJKbDV9Y9TZ4KhZ9pa4eiWkjGPdnfbtW-qDA&s"
                  alt=""
                />
                <h3>Free Shipping</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                  elit. Phasellus at iaculis quam. <br /> Integer accumsan
                  tincidunt fringilla.
                </p>
              </Col>
              <Col
                className="gutter-row"
                span={8}
                xs={24}
                sm={24}
                lg={8}
                md={12}
              >
                {" "}
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJGUpOevIJKbDV9Y9TZ4KhZ9pa4eiWkjGPdnfbtW-qDA&s"
                  alt=""
                />
                <h3>Free Shipping</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                  elit. Phasellus at iaculis quam. <br /> Integer accumsan
                  tincidunt fringilla.
                </p>
              </Col>
              <Col
                className="gutter-row"
                span={8}
                xs={24}
                sm={24}
                lg={8}
                md={12}
              >
                {" "}
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJGUpOevIJKbDV9Y9TZ4KhZ9pa4eiWkjGPdnfbtW-qDA&s"
                  alt=""
                />
                <h3>Free Shipping</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                  elit. Phasellus at iaculis quam. <br /> Integer accumsan
                  tincidunt fringilla.
                </p>
              </Col>
            </Row>
          </div>
        </div>
      </section>
      <hr style={{ backgroundColor: "gray", marginTop: "20px" }} />
      <section className={styles.sect3}>
        <div className="container">
          <Row
            gutter={{
              xs: 8,
              sm: 16,
              md: 24,
              lg: 32,
            }}
          >
            <Col className="gutter-row" span={8} xs={24} sm={24} lg={8} md={12}>
              <div className={styles.imgCont}>
                <img
                  src="https://preview.colorlib.com/theme/shoppers/images/women.jpg"
                  alt=""
                  height={600}
                  style={{ padding: "100px 0", position: "relative" }}
                />
              </div>
              <div
                className={styles.text}
                style={{ position: "absolute", top: "73%", left: "5%" }}
              >
                <p>Collections</p>
                <h2>Women</h2>
              </div>
            </Col>
            <Col className="gutter-row" span={8} xs={24} sm={24} lg={8} md={12}>
              <div className={styles.imgCont}>
                <img
                  src="https://preview.colorlib.com/theme/shoppers/images/children.jpg"
                  alt=""
                  height={600}
                  style={{ padding: "100px 0", position: "relative" }}
                />
              </div>
              <div
                className={styles.text}
                style={{ position: "absolute", top: "73%", left: "5%" }}
              >
                <p>Collections</p>
                <h2>Children</h2>
              </div>
            </Col>
            <Col className="gutter-row" span={8} xs={24} sm={24} lg={8} md={12}>
              {" "}
              <div className={styles.imgCont}>
                <img
                  src="https://preview.colorlib.com/theme/shoppers/images/men.jpg"
                  alt=""
                  height={600}
                  style={{ padding: "100px 0", position: "relative" }}
                />
              </div>
              <div
                className={styles.text}
                style={{ position: "absolute", top: "73%", left: "5%" }}
              >
                <p>Collections</p>
                <h2>Men</h2>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      <section>
        {products ? (
          <section style={{ padding: "100px 0" }}>
            <div className={styles.sect1}>
              <div className="container">
                <div
                  style={{
                    backgroundColor: "purple",
                    height: "2px",
                    width: "100px",
                    textAlign: "center",
                    margin: "0 auto",
                    marginBottom: "10px 0",
                  }}
                ></div>
                <h2 style={{ textAlign: "center" }}>Featured Products</h2>
                <TextField
                  id="outlined-basic"
                  name="search"
                  label="Search"
                  variant="outlined"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <Select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"A-Z"}>A-Z</MenuItem>
                    <MenuItem value={"Z-A"}>Z-A</MenuItem>
                  </Select>
                </FormControl>
                <div className={styles.cards}>
                  <Row
                    gutter={{
                      xs: 8,
                      sm: 16,
                      md: 24,
                      lg: 32,
                    }}
                  >
                    {filteredData?.map((product) => (
                      <Col
                        className="gutter-row"
                        span={8}
                        xs={24}
                        sm={24}
                        lg={8}
                        md={12}
                      >
                        {console.log(product)}
                        <div className={styles.card}>
                          {console.log(product)}
                          <img
                            src={product?.img}
                            alt=""
                            width={300}
                            height={300}
                          />
                          <h3>{product?.title}</h3>
                          <p>{product?.bio}</p>
                          <p>{product?.price}</p>
                          <Button>
                            <Link to={`detail/${product?._id}`}>Detail</Link>
                          </Button>
                          <Button onClick={() => handleWishlist(product)}>
                            <FavoriteIcon
                              style={{
                                color: fav.find((x) => x._id == product?._id)
                                  ? "red"
                                  : "inherit",
                              }}
                            />
                          </Button>
                          <Button
                            onClick={() => {
                              let dublicateItem = basket.find(
                                (x) => x._id == product._id
                              );
                              if (dublicateItem) {
                                dublicateItem.count += 1;
                                setBasket([...basket]);
                                localStorage.setItem(
                                  "basket",
                                  JSON.stringify([...basket])
                                );
                              } else {
                                const newBasket = { ...product };
                                newBasket.count = 1;
                                setBasket([...basket, newBasket]);
                                localStorage.setItem(
                                  "basket",
                                  JSON.stringify([...basket, newBasket])
                                );
                              }
                            }}
                          >
                            Basket
                          </Button>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>
              </div>
            </div>
          </section>
        ) : null}
      </section>

      <section className={styles.sect5}>
        <div className="container">
          <div
            style={{
              backgroundColor: "purple",
              height: "2px",
              width: "60px",
              textAlign: "center",
              margin: "0 auto",
              marginBottom: "10px 0",
            }}
          ></div>
          <h2 style={{ textAlign: "center" }}>Big Sale!</h2>
          <Row
            gutter={{
              xs: 8,
              sm: 16,
              md: 24,
              lg: 32,
            }}
          >
            <Col
              className="gutter-row"
              span={12}
              xs={24}
              sm={24}
              lg={12}
             
            >
              <div style={{ padding: "100px 0" }}>
                <img
                  src="https://preview.colorlib.com/theme/shoppers/images/blog_1.jpg"
                  alt=""
                  width={500}
                  height={400}
                />
              </div>
            </Col>
            <Col
              className="gutter-row"
              span={12}
              xs={24}
              sm={24}
              lg={12}
              
            >
              <div className={styles.text} style={{ padding: "100px 0" }}>
                <h2>50% less in all items</h2>
                <p>By Carl Smith • September 3, 2018</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit{" "}
                  <br /> Quisquam iste dolor accusantium facere corporis ipsum
                  animi <br /> deleniti fugiat. Ex, veniam?
                </p>
                <button>Shop Now</button>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <hr />
    </>
  );
};

export default Home;
