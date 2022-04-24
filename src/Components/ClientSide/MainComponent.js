import * as React from "react";
import Header from "./Header";
import "./CSS/main.css";
import FoodCategories from "./FoodCategories";
import { Divider, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import StarIcon from '@mui/icons-material/Star';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function MainComponent(props) {

  React.useEffect(()=>{
    AOS.init({ duration: 3000 })
  },[]);

  return (
    <React.Fragment>
      <div className="main">
        <div className="subdiv">
          <Header />
          <div>
            <img src="./images/foodstore.png" className="bgimg" />
          </div>
          <section>
            <div className="menu">
              <div className="menucards" data-aos="zoom-in">
                <h1>Vegetarian Food</h1>
              <Grid container spacing={1} className="cardcontainer">
                {FoodCategories.map((item) => {
                  return (
                      <Grid items xs={12} sm={4} key={item.id} className="cards">
                        <div>
                          <Card sx={{ maxWidth: 345 }} className="maincard">
                            <CardMedia
                              component="img"
                              height="140"
                              image={item.image}
                              alt="green iguana"
                              className="responsiveimg"
                            />
                            <div>
                              <CardContent style={{height:'30vh'}}>
                                <Typography
                                  gutterBottom
                                  variant="h5"
                                  component="div"
                                  className="heading"
                                >
                                  {item.name}
                                </Typography>
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                >
                                  {item.description}
                                </Typography>
                                <div className="price">
                                <p className="rate">&#8377;{item.price}</p>
                                <p className="rating"><StarIcon style={{color:'F8B400'}} /> {item.ratingStar}</p>
                              </div> 
                              </CardContent>
                            <div>
                              <CardActions>
                                <Button className="btn">ADD TO CART</Button>
                              </CardActions> 
                            </div>
                            </div>
                          </Card>
                        </div>
                      </Grid>
                  );
                })}
                </Grid>
              </div>
            </div>
          </section>
          <footer>
            <div className="footercontent">
                <ul>
                  <li>HOME</li>
                  <li>ABOUT</li>
                  <li>CONTACT</li>
                </ul>
                <div className="icons">
                  <p><FacebookIcon/></p>
                  <p><InstagramIcon/></p>
                  <p><PinterestIcon/></p>
                  <p><TwitterIcon/></p>
                </div>
            </div>
            <Divider style={{backgroundColor:'#ffffff',color:'#ffffff',width:'100vw'}} />
            <span>@Copyright 2022</span>
          </footer>
        </div>
      </div>
    </React.Fragment>
  );
}
