import React, { useState } from "react";
import axios from 'axios';
import Cookies from 'universal-cookie';
import { Redirect } from "react-router-dom";

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
//import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

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
    margin: theme.spacing(8, 4),
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


export default function Login() {
  const classes = useStyles();
  const [user, setUser] = useState({
    email: '',
    password: "",
  })

  function updateContent(value, key) {
    const userCopy = {...user}
    userCopy[key] = value;
    setUser(userCopy)
  }

  function findUserbyEmail(users, email) {
    return users.filter((user) => {
      return user.email === email;
    });
  }
  
  const cookies = new Cookies();
  let identity = "client"
  const login = function() {
    if (identity === "client") {
      alert("login Client")
      // change the user_for_test
      let loginClient = findUserbyEmail(users_for_test, user.email)[0]
      cookies.set('user_id', loginClient.id, { path: '/' });
      cookies.set('identity', 'client', { path: '/' });

      axios.post(`login_${identity}`, user).then((response)=> {
        console.log("This is response", response)
      }).catch((error) => {
        console.log('Error', error)
      })
      
    } else {
      alert("login Artist")
      // change the artist_for_test
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

  return (
    <div className="login">
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={user.email}
              onChange={(event) => updateContent(event.target.value, "email")}
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
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
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Sign in with Artist Account"
              onChange={() => {
                if (identity === "client") {
                  identity = "artist"
                  console.log(identity)
              } else {
                identity = "client"
                console.log(identity)
              }}}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={() => {login()}}
            >
              Sign In
            </Button>

            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
    </div>
  );
}