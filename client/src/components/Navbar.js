import React from 'react'
import { Link } from "gatsby"
import clsx from 'clsx'
import {makeStyles, useTheme} from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import CssBaseline from '@material-ui/core/CssBaseline'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import HomeIcon from '@material-ui/icons/Home'
import InfoIcon from '@material-ui/icons/Info'
import BallotIcon from '@material-ui/icons/Ballot'
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline'
import EventIcon from '@material-ui/icons/Event'
import SubjectIcon from '@material-ui/icons/Subject'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

const drawerWidth = 280

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: '#386641',
    height: '83px',
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
    padding: theme.spacing(4),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(3, 3),
    // necessary for content to be below app bar
    backgroundColor: '#6A994E',
    height: '83px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',

    boxShadow:
      '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(30),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    textDecoration: 'none',
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
}))

export const Navbar = () => {
  const classes = useStyles()
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <div variant="h6" nowrap="true" className={classes.title}>
            <img
              src="https://i.ibb.co/prqtg3H/WOTM-white-full-logo.png"
              width="220px"
              flex-grow="2"
            />
          </div>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronLeftIcon marginleft="-10px" />
            ) : (
              <ChevronRightIcon marginleft="-10px" />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <Link to="/" variant="body2">
              <ListItemText
                textDecoration="none"
                color="black"
                primary="Home"
              />
            </Link>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <Link to="/about" variant="body2">
              <ListItemText primary="About" />
            </Link>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <BallotIcon />
            </ListItemIcon>
            <Link to="/programs" variant="body2">
              <ListItemText primary="Programs" />
            </Link>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <SubjectIcon />
            </ListItemIcon>
            <Link to="/news" variant="body2">
              <ListItemText primary="News" />
            </Link>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <EventIcon />
            </ListItemIcon>
            <Link to="/events" variant="body2">
              <ListItemText primary="Events" />
            </Link>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <PeopleOutlineIcon />
            </ListItemIcon>
            <Link to="/volunteer" variant="body2">
              <ListItemText primary="Volunteer" />
            </Link>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FavoriteBorderIcon />
            </ListItemIcon>
            <Link to="/donate" variant="body2">
              <ListItemText primary="Donate" />
            </Link>
          </ListItem>
        </List>
      </Drawer>
    </div>
  )
}
