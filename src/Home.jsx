import ban2 from "./images/banner3.png";
import ban3 from "./images/banner3.png";
import pr1 from "./images/pr1.png";
import pr2 from "./images/pr2.png";
import pr3 from "./images/pr3.png";
import pr4 from "./images/pr4.png";
import pr5 from "./images/pr5.png";
import React from "react";
import Navbar from "./Navbar";
//import Homecontent from "../../Components/Homecontent/Homecontent";
import Container from "@material-ui/core/Container";
import { Button, Typography } from "@material-ui/core";
// import Appslick from "../../Components/Aaothercontent/Slick/Testimonialslick";
import Slickk from "./Slick";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { pink, red, green, deepPurple, amber } from "@material-ui/core/colors";
import Grid from "@material-ui/core/Grid";
import Slickapislider from "./Slickapislider";
const cuuseStyles = makeStyles((theme) => ({
  cupaper: {
    marginTop: theme.spacing(1)
    // backgroundColor: pink[500]
  },
  cupap: {
    color: "#fff"
  },
  nwcll: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
    Color: "#0c0116eb",
    textAlign: "center"
  },
  tstmnl: {
    marginBottom: theme.spacing(10),
    color: "#db5660",
    textAlign: "center"
  }
}));
const Home = () => {
  const classes = cuuseStyles();
  return (
    <>
      <Navbar />
      <div className="tpslicbox">
        <Slickk />
      </div>
      <Container>
        <Typography variant="h2" className={classes.nwcll}>
          New Collection
        </Typography>

        {/* <p>
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation
        </p> */}

        <div>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} className={classes.cupaper}>
              <Typography variant="div" className={classes.cupap}>
                <img src={pr1} className="res_img" alt="sl1" />
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} className={classes.cupaper}>
              <Typography variant="div" className={classes.cupap}>
                <img src={pr2} className="res_img" alt="sl1" />
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} className={classes.cupaper}>
              <Typography variant="div" className={classes.cupap}>
                <img src={pr3} className="res_img" alt="sl1" />
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} className={classes.cupaper}>
              <Typography variant="div" className={classes.cupap}>
                <img src={pr5} className="res_img" alt="sl1" />
              </Typography>
            </Grid>
          </Grid>
        </div>
      </Container>
      <div className="bgprpl">
        <Container>
          <Typography variant="h2" className={classes.tstmnl}>
            Testimonials
          </Typography>
          <Grid item xs={12} md={6} className="cntr_img">
            <Slickapislider />
          </Grid>

          <div className="slicbox">{/* <Appslick /> */}</div>
        </Container>
      </div>
    </>
  );
};

export default Home;
