import React from "react";
import { withRouter } from "react-router";
import { Link as RouterLink } from "react-router-dom";

import { AppBar, Toolbar, IconButton, Avatar, Container, Drawer, Link } from "@material-ui/core";
import MoreIcon from "@material-ui/icons/MoreVert";
import useStyles from "./style/NavStyle";

import { DesktopSignInLInk, MobileSignInLInk } from "./SignInLink";
import { DesktopSignOutLInk, MobileSignOutLInk } from "./SignOutLink";

const Navbar = () => {
  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Drawer anchor="right" open={isMobileMenuOpen} onClose={handleMobileMenuClose} id={mobileMenuId} className={classes.sectionMobile}>
      <MobileSignInLInk />
      <MobileSignOutLInk />
    </Drawer>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.navColor}>
        <Container>
          <Toolbar className={classes.toolbar}>
            <Link component={RouterLink} to="/" className={classes.logoFont} color="inherit">
              Blogging App
            </Link>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <DesktopSignOutLInk />
              <DesktopSignInLInk />
            </div>
            <div className={classes.sectionMobile}>
              <IconButton aria-label="show more" aria-controls={mobileMenuId} aria-haspopup="true" onClick={handleMobileMenuOpen} color="inherit">
                <Avatar src="/broken-image.jpg" className={classes.avatarSmall} />
              </IconButton>
              <IconButton aria-label="show more" aria-controls={mobileMenuId} aria-haspopup="true" onClick={handleMobileMenuOpen} color="inherit">
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
};

export default withRouter(Navbar);
