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
import {validateEmail} from '../../utils'

//Convert check boxes to an array to send to the back end

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
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
  paper: {
    marginTop: theme.spacing(8),
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
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    margin: theme.spacing(3),
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
  } = state

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
      await axios.post('/api/followers', body)
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
  console.log(state)
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <PersonAddIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {displayName}
        </Typography>
        <form
          className={classes.form}
          // onSubmit={handleSubmit}
          name={name}
          noValidate
        >
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
                  label="I want to receive inspiration, marketing promotions and updates via email."
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
