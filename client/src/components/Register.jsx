import React, { useState } from "react";
import axios from 'axios';
import Cookies from 'universal-cookie';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
//import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const {requests_for_test, artists_for_test, users_for_test} = require("../testingData")

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    width: '160vh'
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/hrx1RkibJu8)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    marginTop: theme.spacing(8, 4),
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
}));


export default function Register() {
  const [user, setUser] = useState({
    first_name: 'test',
    last_name:'test',
    email: '',
    password: "",
    phone_number: '',
  })

  function updateContent(value, key) {
    const userCopy = {...user}
    userCopy[key] = value;
    console.log("This is user1" ,userCopy)
    setUser(userCopy)
  }

  function findUserbyEmail(users, email) {
    return users.filter((user) => {
      return user.email === email;
    });
  }

  const cookies = new Cookies();
  let identity = "client"
  const register = function() {
    if (identity === "client") {
      let loginClient = findUserbyEmail(users_for_test, user.email)[0]
      cookies.set('user_id', loginClient.id, { path: '/' });
      cookies.set('identity', 'client', { path: '/' });

      axios.post(`login_${identity}`, user).then((response)=> {
        console.log("This is response", response)
      }).catch((error) => {
        console.log('Error', error)
      })
    } else {
      let loginArtist = findUserbyEmail(artists_for_test, user.email)[0]
      cookies.set('user_id', loginArtist.id, { path: '/' });
      cookies.set('identity', 'artist', { path: '/' });

      axios.post(`login_${identity}`, user).then((response)=> {
        console.log("This is response", response)
      }).catch((error) => {
        console.log('Error', error)
      })
    }

  }

  const classes = useStyles();

  return (
    <div className="register">
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="first_name"
                variant="outlined"
                required
                fullWidth
                id="first_name"
                label="first_name"
                value={user.first_name}
                onChange={(event) => updateContent(event.target.value, "first_name")}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="last_name"
                label="last_name"
                name="last_name"
                value={user.last_name}
                onChange={(event) => updateContent(event.target.value, "last_name")}
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
                value={user.email}
                onChange={(event) => updateContent(event.target.value, "email")}
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                value={user.password}
                id="password"
                onChange={(event) => updateContent(event.target.value, "password")}
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="phone_number"
                label="phone_number"
                type="phone_number"
                id="phone_number"
                value={user.phone_number}
                onChange={(event) => updateContent(event.target.value, "phone_number")}
                autoComplete="phone_number"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Register this account as an artist."
                onChange={() => {
                  if (identity === "clients") {
                    identity = "artists"
                } else {
                  identity = "clients"
                }}}
              />
            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => {register()}}
          >
            Sign Up
          </Button>

          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
    </div>
  );
}