import React from 'react'
import clsx from 'clsx'
import {makeStyles, useTheme} from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import CssBaseline from '@material-ui/core/CssBaseline'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
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
import {Link} from 'react-router-dom'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
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
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
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
          <Typography variant="h6" noWrap className={classes.title}>
            Woodside on the Move
          </Typography>
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
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <Link href="/" variant="body2">
              <ListItemText primary="Home" />
            </Link>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <Link href="/about" variant="body2">
              <ListItemText primary="About" />
            </Link>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <BallotIcon />
            </ListItemIcon>
            <Link href="/programs" variant="body2">
              <ListItemText primary="Programs" />
            </Link>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <SubjectIcon />
            </ListItemIcon>
            <Link href="/news" variant="body2">
              <ListItemText primary="News" />
            </Link>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <EventIcon />
            </ListItemIcon>
            <Link href="/events" variant="body2">
              <ListItemText primary="Events" />
            </Link>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <PeopleOutlineIcon />
            </ListItemIcon>
            <Link href="/volunteer" variant="body2">
              <ListItemText primary="Volunteer" />
            </Link>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FavoriteBorderIcon />
            </ListItemIcon>
            <Link href="/donate" variant="body2">
              <ListItemText primary="Donate" />
            </Link>
          </ListItem>
        </List>
      </Drawer>
    </div>
  )
}
