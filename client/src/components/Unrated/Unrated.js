import React, { useState, useContext } from 'react';
import { makeStyles, useMediaQuery, withStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardMedia, CardContent, Grid, Button, Dialog, DialogActions, DialogContent, Input, FormControl, InputAdornment, FormHelperText,Avatar, Typography, DialogTitle, TextField } from '@material-ui/core';
import { YelpContext } from '../../util/YelpContext';
import API from '../../util/API';
import { AuthContext } from '../../util/AuthContext'; 
import './Unrated.scss';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 425,
    maxHeight: 425,
    [theme.breakpoints.down("930px")]: {
      minHeight: 0,
      maxHeight: 0
    },

  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
  media: {
    maxHeight: 350,
    paddingTop: '56.25%', // 16:9
    [theme.breakpoints.down("md")]: {
      paddingTop: '37%'
    }, 
    [theme.breakpoints.down("500px")]: {
      paddingTop: '43%'
    }
  },
  btn: {
    color: "white",
    background: "#9F635A",
    marginTop: "20px",
    '&:hover': {
      background: "#9F635A"
    }
  },
  grid: {
     justifyContent: "center",
  },
  control: {
    margin: "10px"
  },
  backDrop: {
    background: "rgba(95, 20, 10, 0.643)",
  }

}));

export default function Unrated() {
  const classes = useStyles();
  const { businesses } = useContext(YelpContext);
  console.log(businesses);
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [formObject, setFormObject] = useState({})

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormObject({...formObject, [name]: value});
  }

  const onSubmit = e => {
    e.preventDefault();
    if (formObject) {
      console.log('hi');
      API.postReview({
        foodRating: formObject.foodRating,
        staffSass: formObject.staffSass,
        bathrooms: formObject.bathrooms,
        favItem: formObject.favItem,
        threeWords: formObject.threeWords
      })

      console.log(formObject);
    }

  }
  // pass in the props from the yelp api from yelp and map over top 25 results (useContext?)
  return (
    <Grid container spacing={2} className={classes.grid}>
      {businesses &&
        businesses.map(({ name, image_url, location }) => {
          return <Grid item xs={12} sm={8} md={6} id={name}>
            <Card className={classes.root}>
              <CardHeader
                avatar={
                  <Avatar alt="Remy Sharp" src={image_url} />
                }
                title={name}
                className="title"
              />
              <CardMedia className={classes.media} image={image_url} />
              <CardContent>
                <Typography>{location.display_address[0]} {location.display_address[1]}</Typography>
                {/* on click save the form values to  mongo and removes card from list*/}
                <Button variant="contained" onClick={handleClickOpen} type="button" className={classes.btn}>
                  Rate This Restaurant!
                </Button>

{/* --------------------------------------------------insert modal here------------------------------------------------------------------------------------- */}
                <Dialog 
                  open={open} 
                  onClose={handleClose} 
                  aria-labelledby="form-dialog-title" 
                  BackdropProps= {{
                    classes: {
                      root: classes.backDrop
                  }
                 
                }}
                  onSubmit={onSubmit}
              >
                  <DialogTitle id="form-dialog-title">Create Your Rating Here!</DialogTitle>
                    <DialogContent>                     
                        <FormControl className={classes.control}>
                          <Input
                            id="standard-adornment-weight"
                            endAdornment={<InputAdornment position="end">/10</InputAdornment>}
                            aria-describedby="standard-weight-helper-text"
                            inputProps={{
                              'aria-label': 'weight',
                            }}
                            onChange = {handleInputChange}
                            name="foodRating"
                          />
                          <FormHelperText id="standard-weight-helper-text">Food Rating</FormHelperText>
                        </FormControl>                    
                        <FormControl className={classes.control}>
                          <Input
                            id="standard-adornment-weight"
                            endAdornment={<InputAdornment position="end">/10</InputAdornment>}
                            aria-describedby="standard-weight-helper-text"
                            inputProps={{
                              'aria-label': 'weight',
                            }}
                            onChange = {handleInputChange}
                            name="staffSass"
                          />
                          <FormHelperText id="standard-weight-helper-text">Rate the sass of the Staff</FormHelperText>
                        </FormControl>                     
                        <FormControl className={classes.control}>
                          <Input
                            id="standard-adornment-weight"
                            endAdornment={<InputAdornment position="end">/10</InputAdornment>}
                            aria-describedby="standard-weight-helper-text"
                            inputProps={{
                              'aria-label': 'weight',
                            }}
                            onChange = {handleInputChange}
                            name = "bathrooms"
                          />
                          <FormHelperText id="standard-weight-helper-text">Bathroom Cleanliness</FormHelperText>
                        </FormControl>                    
                        <TextField
                          id="standard-full-width"
                          style={{ margin: 8 }}
                          placeholder="Typer your response here!"
                          fullWidth
                          margin="normal"
                          InputLabelProps={{
                            shrink: true,
                          }}
                          onChange = {handleInputChange}
                          name="favItem"
                        />
                        <FormHelperText id="standard-weight-helper-text">Favorite Item</FormHelperText>                    
                        <TextField
                          id="standard-full-width"
                          style={{ margin: 8 }}
                          placeholder="Typer your response here!"
                          fullWidth
                          margin="normal"
                          InputLabelProps={{
                            shrink: true,
                          }}
                          onChange = {handleInputChange}
                          name = "threeWords"
                        />
                        <FormHelperText id="standard-weight-helper-text">Describe this restaurant in 3 words</FormHelperText>
                    </DialogContent>                  
                      <DialogActions>                       
                        <Button variant="contained" onClick={handleClose, onSubmit} className={classes.btn}>
                          Save
                        </Button>
                      </DialogActions>                  
                </Dialog>
              </CardContent>
            </Card>
          </Grid>
        })
      }
    </Grid>
  );
}