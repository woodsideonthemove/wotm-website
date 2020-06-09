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
import {createFollower} from '../redux/followers'
import {connect} from 'react-redux'
import axios from 'axios'
import FormLabel from '@material-ui/core/FormLabel'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import FormHelperText from '@material-ui/core/FormHelperText'

//Convert check boxes to an array to send to the back end
//figure out error handling for checkbox

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
    housingAdvocacy: false,
    housingPrograms: false,
    educationPrograms: false,
    educationAdvocacy: false,
    events: false,
    community: false,
    optEmail: false,
  })

  let {
    housingAdvocacy,
    housingAssistance,
    educationPrograms,
    educationAdvocacy,
    events,
    community,
    optEmail,
  } = state

  const error = !optEmail

  const handleSubmit = async (evt) => {
    if (error) {
      return <FormHelperText>You can display an error</FormHelperText>
    } else {
      evt.preventDefault()
      const body = {
        firstName: evt.target.firstName.value,
        lastName: evt.target.lastName.value,
        email: evt.target.email.value,
      }
      await axios.post('/api/followers', body)
    }
  }

  const handleChange = (event) => {
    if (event.target.value === 'allowEmails') optEmail = !optEmail
    setState({...state, [event.target.name]: event.target.checked})
  }

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
          onSubmit={handleSubmit}
          name={name}
          noValidate
        >
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
              />
            </Grid>
            {name === 'subscribe' ? (
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="phone"
                    label="Phone"
                    type="phone"
                    id="phone"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="streetAddress"
                    label="Street Address"
                    type="streetAddress"
                    id="streetAddress"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="secondaryAddress"
                    label="Secondary Address"
                    type="secondaryAddress"
                    id="secondaryAddress"
                  />
                </Grid>
                <Grid item xs>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="city"
                    label="City"
                    type="city"
                    id="city"
                  />
                </Grid>
                <Grid item xs>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="state"
                    label="State"
                    type="state"
                    id="state"
                  />
                </Grid>
                <Grid item xs>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="zipCode"
                    label="Zip"
                    type="zipCode"
                    id="zipCode"
                  />
                </Grid>
                <div className={classes.root}>
                  <FormControl
                    component="fieldset"
                    className={classes.formControl}
                  >
                    <FormLabel component="interest">
                      Areas of Interest
                    </FormLabel>
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={housingAdvocacy}
                            onChange={handleChange}
                            name="housingAdvocacy"
                          />
                        }
                        label="Housing Campaign"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={housingAssistance}
                            onChange={handleChange}
                            name="housingAssistance"
                          />
                        }
                        label="Housing Assistance"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={educationAdvocacy}
                            onChange={handleChange}
                            name="educationAdvocacy"
                          />
                        }
                        label="Education Campaign"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={educationPrograms}
                            onChange={handleChange}
                            name="educationPrograms"
                          />
                        }
                        label="Educational Programs and Services"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={events}
                            onChange={handleChange}
                            name="events"
                          />
                        }
                        label="Events and Actions"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={community}
                            onChange={handleChange}
                            name="community"
                          />
                        }
                        label="Community Updates"
                      />
                    </FormGroup>
                  </FormControl>
                  {/* <FormControl
                    required
                    error={error}
                    component="fieldset"
                    className={classes.formControl}
                  >
                    <FormLabel component="legend">Pick two</FormLabel>
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={gilad}
                            onChange={handleChange}
                            name="gilad"
                          />
                        }
                        label="Gilad Gray"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={jason}
                            onChange={handleChange}
                            name="jason"
                          />
                        }
                        label="Jason Killian"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={antoine}
                            onChange={handleChange}
                            name="antoine"
                          />
                        }
                        label="Antoine Llorca"
                      />
                    </FormGroup>
                  </FormControl> */}
                </div>
              </Grid>
            ) : (
              <div />
            )}
            <Grid item xs={12}>
              <FormControlLabel
                error={error}
                component="fieldset"
                control={<Checkbox value="allowEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {displayName}
          </Button>
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
