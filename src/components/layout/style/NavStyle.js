import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  navColor: {
    backgroundColor: "#424242",
  },

  toolbar: {
    padding: theme.spacing(1, 0),
  },

  logoFont: {
    fontFamily: "Lobster', cursive",
    fontSize: "2rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
  },

  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },

  navbarLink: {
    padding: theme.spacing(0, 2),
  },

  avatarSmall: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },

  drawerWidth: {
    width: 220,
    paddingTop: theme.spacing(4),
  },
}));

export default useStyles;
