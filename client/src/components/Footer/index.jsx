import {  Col, Row } from "antd";
import styles from "../Footer/footer.module.scss"


import Button from '@mui/material/Button';
import { TextField } from "@mui/material";
const Footer = () => {
  return (

    <footer>
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
          <h3>Navigations</h3>
          <div className={styles.all}>
          <ul>
            <li>Sell Online</li>
            <li>Store builder</li>
            <li>Shopping cart</li>
            <li>Features</li>
          </ul>
          <ul>
            <li>Sell Online</li>
            <li>Store builder</li>
            <li>Shopping cart</li>
            <li>Features</li>
          </ul>
          <ul>
            <li>Software</li>
            <li>Hardware</li>
            <li>Point of sale</li>
          </ul>
          </div>
       
        </Col>
        <Col
          className="gutter-row"
          span={8}
          xs={24}
          sm={24}
          lg={8}
          md={12}
        >
          <h3>Promo</h3>
          <img src="https://preview.colorlib.com/theme/shoppers/images/hero_1.jpg" alt="" width={200} height={100}/>
          <p>Finding Your Perfect Shoes</p>
          <p>Promo from nuary 15 — 25, 2019</p>
        </Col>
        <Col
          className="gutter-row"
          span={8}
          xs={24}
          sm={24}
          lg={8}
          md={12}
        >
          <h3>Contact Info</h3>
          <div className={styles.icon} style={{display:'flex'}}>
        <img src="https://cdn-icons-png.flaticon.com/512/2838/2838912.png" alt="" width={20} height={20}/>
          <p>203 Fake St. Mountain View, San <br /> Francisco, California, USA</p>
          </div>
          <div className={styles.icon} style={{display:'flex'}}>
        <img src="https://t4.ftcdn.net/jpg/06/11/74/07/360_F_611740702_pef349OBjBFuoVbncULZAmVfTXZty5Kn.jpg" alt="" width={20} height={20}/>
         <a href="">+2 392 3929 210</a>
          </div>
          <div className={styles.icon} style={{display:'flex'}}>
        <img src="https://cdn-icons-png.flaticon.com/512/666/666162.png" alt="" width={20} height={20}/>
          <a href="">emailaddress@domain.com</a>
          </div>

          <h3>Subscribe</h3>
          <TextField id="outlined-basic" label="Outlined" variant="outlined"/>
          <Button variant="outlined" style={{height:"53px",width:'100px'}}>Send</Button>
        </Col>
      </Row>
      </div>
   
    </footer>
  );
};

export default Footer;
