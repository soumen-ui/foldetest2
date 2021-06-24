import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
// import InboxIcon from "@material-ui/icons/MoveToInbox";
// import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemText from "@material-ui/core/ListItemText";
// import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import "./Navbar.css";

import logo1 from "./images/logo.svg";

const drawerWidth = "100%";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
    // [theme.breakpoints.down("sm")]: {
    //   width: "240px",
    //   flexShrink: 0
    // }
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      // width: `calc(100% - ${drawerWidth}px)`,
      // marginLeft: drawerWidth

      width: "100%",
      marginLeft: "0",
      zIndex: "-1",
      backgrund: "transparent"
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth
    },
    [theme.breakpoints.down("580")]: {
      width: "200px"
    }
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

function Navbar(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="dwr">
      <div className={classes.toolbar} />
      <Divider />

      {/* <NavLink exact className="nav-link logo " to="/">
        <i className="fa fa-home"></i>
        <img src={logo1} className="res_img" alt="sl1" />
      </NavLink> */}
      <ul className="cunavbar-nav ml-auto" id="myDIV">
        <NavLink exact activeClassName="myactive" className="nav-link " to="/">
          {" "}
          <ListItem button className="nav-item zactive">
            <i className="fa fa-home"></i>
            Home{" "}
          </ListItem>
        </NavLink>

        <NavLink activeClassName="myactive" className="nav-link" to="/about">
          <ListItem button className="nav-item zactive">
            <i className="far fa-clone"></i>About
          </ListItem>
        </NavLink>
        <NavLink activeClassName="myactive" className="nav-link" to="/contact">
          <ListItem button className="nav-item">
            {" "}
            <i className="far fa-clone"></i>Contact
          </ListItem>
        </NavLink>
      </ul>
      <Divider />
      {/* <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <NavLink exact className="nav-link logo " to="/">
        <i className="fa fa-home"></i>
        <img src={logo1} className="res_img" alt="sl1" />
      </NavLink>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "left" : "right"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
      </main>
    </div>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func
};

export default Navbar;
