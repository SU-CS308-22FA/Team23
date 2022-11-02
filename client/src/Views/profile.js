import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import FaceIcon from "@mui/icons-material/Face";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import axios, * as others from "axios";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Profile() {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});
  const cookie = new Cookies();
  cookie.get("email");
  const email = cookie.cookies.email;
  let user1 = {};

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  useEffect(() => {
    const email = cookie.get("email");
    var data = JSON.stringify({
      email: email,
    });
    var config = {
      method: "get",
      url: "http://localhost:3000/users/profile/" + email,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then((response) => {
        setUser(response.data.message[0]);

        setIsLoading(false);
        user1 = response.data.message[0];
        console.log(user);
        console.log(user1.name);
      })
      .catch((error) => {
        setUser(error);
      }); // Your code here
  }, []);
  if (isLoading) {
    return <div> Loading ... </div>;
  }
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        {
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage:
                "url(https://sortitoutsi.net/uploads/images/whrQXkyE74x0gSePdWBh40Dt7uvgypjO.png)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        }
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <FaceIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              {user.name} {user.lastname}
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                fullWidth
                disabled
                id="outlined-disabled-name"
                label={user.name} //current user name
                name="name"
                autoFocus
              />

              <TextField
                margin="normal"
                fullWidth
                disabled
                id="outlined-disabled-lastname"
                name="lastname"
                label={user.lastname}
                type="lastname"
              />
              <TextField
                margin="normal"
                fullWidth
                disabled
                id="outlined-disabled-email"
                name="email"
                label={user.email}
                type="email"
              />
              <Box
                sx={{
                  my: 1,
                  mx: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              ></Box>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="oldPassword"
                    fullWidth
                    id="Old Password"
                    label="Old Password"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    id="newPassword"
                    label="New Password"
                    name="newPassword"
                    autoComplete="family-name"
                  />
                </Grid>
              </Grid>
              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Update Profile
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
