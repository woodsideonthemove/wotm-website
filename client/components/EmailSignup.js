import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import PersonAddIcon from '@material-ui/icons/PersonAdd'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import {connect} from 'react-redux'
import axios from 'axios'
import FormLabel from '@material-ui/core/FormLabel'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Slide from '@material-ui/core/Slide'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

import {validateEmail} from '../../utils'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

function Copyright() {
  return (
    <Typography
      variant="body2"
      color="textSecondary"
      align="center"
      padding="10px"
    >
      {'Copyright © '}
      <Link color="inherit" href="www.woodsideonthemove.org/">
        Woodside on the Move
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  container: {
    position: 'relative',
    overflow: 'hidden',
    align: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  main: {
    zIndex: '3',
    position: 'relative',
  },
  media: {
    display: 'block',
    align: 'center',
    position: 'absolute',
    marginLeft: 'auto',
    marginRight: 'auto',
    left: '0',
    top: '0',
    height: '100%',
    width: 'auto',
    opacity: '0.6',
    zIndex: '-1',
  },
  paper: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    padding: '30px',
    backgroundColor: '#FFFFFF',
    radius: '20px',
    opacity: '0.9',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    margin: theme.spacing(3),
  },
  header: {
    display: 'flex',
    maxHeight: '65px',
    opacity: '0.9',
  },
}))

const SignUp = (props) => {
  const classes = useStyles()
  const {name, displayName} = props

  const [state, setState] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    streetAddress: '',
    secondaryAddress: '',
    city: '',
    stt: '',
    zipCode: '',
    housingAdvocacy: false,
    housingPrograms: false,
    educationPrograms: false,
    educationAdvocacy: false,
    events: false,
    community: false,
    optEmail: false,
    open: false,
    setOpen: false,
  })

  let {
    firstName,
    lastName,
    email,
    phone,
    streetAddress,
    secondaryAddress,
    city,
    stt,
    zipCode,
    housingAdvocacy,
    housingPrograms,
    educationPrograms,
    educationAdvocacy,
    events,
    community,
    optEmail,
    open,
  } = state

  const handleClose = () => {
    setState({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      streetAddress: '',
      secondaryAddress: '',
      city: '',
      stt: '',
      zipCode: '',
      housingAdvocacy: false,
      housingPrograms: false,
      educationPrograms: false,
      educationAdvocacy: false,
      events: false,
      community: false,
      optEmail: false,
      open: false,
      setOpen: false,
    })
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    const body = {
      firstName: state.firstName,
      lastName: state.lastName,
      email: state.email,
      phone: state.phone,
      streetAddress: state.streetAddress,
      secondaryAddress: state.secondaryAddress,
      city: state.city,
      state: state.stt,
      zipCode: state.zipCode,
      housingAdvocacy: state.housingAdvocacy,
      housingPrograms: state.housingPrograms,
      educationPrograms: state.educationPrograms,
      educationAdvocacy: state.educationAdvocacy,
      events: state.events,
      community: state.community,
    }
    try {
      const res = await axios.post('/api/followers', body)
      if (res.status === 200 || res.status === 201) {
        setState({...state, open: true})
      }
    } catch (err) {
      console.log(err)
    }
  }

  const handleClick = (event) => {
    setState({...state, [event.target.name]: event.target.checked})
  }

  const handleInput = (event) => {
    setState({...state, [event.target.name]: event.target.value})
  }

  const renderButton = () => {
    if (optEmail && firstName.length && lastName.length && validateEmail(email))
      return (
        <div>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            {displayName}
          </Button>
          <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle id="alert-dialog-slide-title">
              Successfully added to our email list!
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                Keep up to date by also following us on{' '}
                <a href="https://www.facebook.com/WoodsideontheMove/">
                  Facebook
                </a>
                , <a href="https://twitter.com/WoodsideMoves">Twitter</a>, and{' '}
                <a href="https://www.instagram.com/woodsideonthemove/">
                  Instagram
                </a>
                .
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Continue
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      )
    else
      return (
        <Button
          type="submit"
          disabled={true}
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          {displayName}
        </Button>
      )
  }
  return (
    <Container className={classes.container}>
      {name === 'subscribe' ? (
        <img
          className={classes.media}
          src="https://i.ibb.co/dmZ849B/82221757-10162696550845697-567291130270449664-n.jpg"
        />
      ) : (
        <React.Fragment />
      )}
      <Container className={classes.main} component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <PersonAddIcon />
          </Avatar>

          <Card className={classes.header} maxHeight="65px">
            <CardContent>
              <Typography variant="h5" component="h2">
                {displayName}
              </Typography>
            </CardContent>
          </Card>

          <form className={classes.form} name={name} noValidate>
            {name === 'email' ? (
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="fname"
                    name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    onChange={handleInput}
                    value={firstName}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="lname"
                    onChange={handleInput}
                    value={lastName}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={handleInput}
                    value={email}
                  />
                </Grid>
              </Grid>
            ) : (
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="fname"
                    name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    onChange={handleInput}
                    value={firstName}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="lname"
                    onChange={handleInput}
                    value={lastName}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={handleInput}
                    value={email}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    name="phone"
                    label="Phone"
                    type="phone"
                    id="phone"
                    onChange={handleInput}
                    value={phone}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    name="streetAddress"
                    label="Street Address"
                    type="streetAddress"
                    id="streetAddress"
                    onChange={handleInput}
                    value={streetAddress}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    name="secondaryAddress"
                    label="Secondary Address"
                    type="secondaryAddress"
                    id="secondaryAddress"
                    onChange={handleInput}
                    value={secondaryAddress}
                  />
                </Grid>
                <Grid item xs>
                  <TextField
                    variant="outlined"
                    fullWidth
                    name="city"
                    label="City"
                    type="city"
                    id="city"
                    onChange={handleInput}
                    value={city}
                  />
                </Grid>
                <Grid item xs>
                  <TextField
                    variant="outlined"
                    fullWidth
                    name="stt"
                    label="State"
                    type="stt"
                    id="stt"
                    onChange={handleInput}
                    value={stt}
                  />
                </Grid>
                <Grid item xs>
                  <TextField
                    variant="outlined"
                    fullWidth
                    name="zipCode"
                    label="Zip"
                    type="zipCode"
                    id="zipCode"
                    onChange={handleInput}
                    value={zipCode}
                  />
                </Grid>
                <div className={classes.root}>
                  <FormControl
                    component="fieldset"
                    className={classes.formControl}
                  >
                    <FormLabel>Areas of Interest</FormLabel>
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={housingAdvocacy}
                            onChange={handleClick}
                            name="housingAdvocacy"
                          />
                        }
                        label="Housing Campaign"
                      />

                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={housingPrograms}
                            onChange={handleClick}
                            name="housingPrograms"
                          />
                        }
                        label="Housing Services"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={educationAdvocacy}
                            onChange={handleClick}
                            name="educationAdvocacy"
                          />
                        }
                        label="Education Campaign"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={educationPrograms}
                            onChange={handleClick}
                            name="educationPrograms"
                          />
                        }
                        label="Educational Programs and Services"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={events}
                            onChange={handleClick}
                            name="events"
                          />
                        }
                        label="Events and Actions"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={community}
                            onChange={handleClick}
                            name="community"
                          />
                        }
                        label="Community Updates"
                      />
                    </FormGroup>
                  </FormControl>
                </div>
              </Grid>
            )}
            <Grid item xs={12}>
              <FormControl
                required
                component="fieldset"
                className={classes.formControl}
              >
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={optEmail}
                        onChange={handleClick}
                        name="optEmail"
                      />
                    }
                    label="I want to stay in the loop with notifications about what's happening in Woodside."
                  />
                </FormGroup>
              </FormControl>
            </Grid>
            {renderButton()}
            <Grid container justify="flex-end">
              <Grid item>
                <a href="/auth/google" variant="body2">
                  {displayName} with Google
                </a>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </Container>
  )
}

const mapFullContact = () => {
  return {
    name: 'subscribe',
    displayName: 'Subscribe',
  }
}

const mapEmailContact = () => {
  return {
    name: 'email',
    displayName: 'Get Event Updates',
  }
}

export const FullSubscribe = connect(mapFullContact)(SignUp)
export const EmailSubscribe = connect(mapEmailContact)(SignUp)
