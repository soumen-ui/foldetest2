import ban1 from "./images/banner1a.png";
import ban2 from "./images/banner2aa.png";
import ban3 from "./images/banner3a.png";
// import ban4 from "../../../images/ban4.jpg";

// import ban6 from "../../../images/ban6.jpg";
// import ban8 from "../../../images/ban8.jpg";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button, Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { pink, red, green, deepPurple, amber } from "@material-ui/core/colors";

const cuuseStyles = makeStyles((theme) => ({
  pncumargin: {
    // margin:mrg
    //backgroundColor: pink[500],
    // backgroundColor: theme.default,
    color: green[600],
    margin: theme.spacing(2),
    "&:hover": {
      backgroundColor: pink[500],
      color: deepPurple[900]
    }
  },

  mmpncumargin: {
    // margin:mrg
    //backgroundColor: pink[500],
    // backgroundColor: theme.default,
    color: pink[600],
    margin: theme.spacing(2),
    "&:hover": {
      backgroundColor: green[500],
      color: deepPurple[900]
    }
  },
  dfcumargin: {
    // margin:mrg
    //backgroundColor: pink[500],

    backgroundColor: theme.default,
    margin: theme.spacing(2),
    "&:hover": {
      backgroundColor: pink[500],
      color: green[200]
    }
  },
  myabl_pos: {
    color: green[200]
  },
  twh_pos: {
    color: "#db5660"
  },
  wh_pos: {
    color: "#fff"
  }
}));

function Slickk() {
  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1
  // };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const classes = cuuseStyles();
  return (
    <>
      <div className="zbg-info sldr">
        {/* <h2> Responsive </h2> */}
        <Slider {...settings}>
          <div className="rel_pos">
            <img src={ban1} className="res_img" alt="sl1" />
            <Typography variant="div" className="abl_pos">
              <Container>
                {/* <Typography
                  variant="h3"
                  color="primary"
                  className={classes.mmpncumargin}
                >
                  New
                </Typography>
                <Typography variant="h3" className={classes.myabl_pos}>
                  New 2
                </Typography> */}
                <Typography variant="h2" className={classes.twh_pos}>
                  New Running Shoes
                </Typography>
                <Typography variant="h1" className={classes.wh_pos}>
                  For Men's
                </Typography>
                <Typography paragraph>ipsum dolor sit amet </Typography>
                <div>
                  <Button variant="contained" color="secondary">
                    Buy Now{" "}
                  </Button>
                  {/* <Button color="primary" className={classes.pncumargin}>
                    Primary
                  </Button> */}
                  <Button
                    variant="contained"
                    color="default"
                    className={classes.dfcumargin}
                  >
                    View more
                  </Button>
                </div>
              </Container>
            </Typography>
          </div>
          <div className="rel_pos">
            <img src={ban2} className="res_img" alt="sl1" />
            <div className="abl_pos">
              <Container>
                <Typography variant="h2" className={classes.twh_pos}>
                  New Camera
                </Typography>
                <Typography variant="h1" className={classes.wh_pos}>
                  For video
                </Typography>
                <p>ipsum dolor sit amet </p>
                <div>
                  <Button variant="contained" color="secondary">
                    Buy Now{" "}
                  </Button>
                  <Button
                    variant="contained"
                    color="default"
                    className={classes.dfcumargin}
                  >
                    View more
                  </Button>
                </div>
              </Container>
            </div>
          </div>
          <div className="rel_pos">
            <img src={ban3} className="res_img" alt="sl1" />
            <div className="abl_pos">
              <Container>
                <Typography variant="h2" className={classes.twh_pos}>
                  New Shirts
                </Typography>
                <Typography variant="h1" className={classes.wh_pos}>
                  For Women's
                </Typography>
                <p>ipsum dolor sit amet </p>
                <div>
                  <Button variant="contained" color="secondary">
                    Buy Now{" "}
                  </Button>
                  <Button
                    variant="contained"
                    color="default"
                    className={classes.dfcumargin}
                  >
                    View more
                  </Button>
                </div>
              </Container>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
}

export default Slickk;
