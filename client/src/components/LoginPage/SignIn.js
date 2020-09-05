
import React, { useState, useContext} from "react";
import AuthService from '../../Services/AuthService'
import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Grid, Typography, Container } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from 'react-router-dom';
import { AuthContext } from "../../util/AuthContext";


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn(props) {
  const classes = useStyles();
  const history = useHistory();
  
  const [user, setUser] = useState({email: "", password : ""});
  const authContext = useContext(AuthContext);

  const onChange = e => {
    e.preventDefault();
    setUser({...user, [e.target.name] : e.target.value});
    console.log(user);
  }

  const onSubmit = e => {
    e.preventDefault();
    AuthService.login(user).then(data=> {
        const { isAuthenticated, user} = data;
        console.log(data);
        if(isAuthenticated){
          console.log('isAuthenticated')
            authContext.setUser(user);
            authContext.setIsAuthenticated(isAuthenticated);
            history.push('/profile')
        } else {
            console.log("not authenticated");
        }
    })
  }

  return (
    <Container maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <OutdoorGrillIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={onSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={onChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange = {onChange}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="#802A1E" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
            onSubmit={onSubmit}
          >
            Sign In
          </Button>
          <Grid container justifycontent>
            <Grid item>
              <Link href="client/src/pages/Login.js" variant="body2">
                New account? Sign up
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
