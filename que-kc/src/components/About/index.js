import React from 'react';
import './_About.scss'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import {Card, CardMedia, CardContent,  Typography } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      minWidth: 345,
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });
  
  export default function MediaCard() {
    const classes = useStyles();
  
    return (
        <div className="aboutCards">
      <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image="https://bestroadtripever.com/wp-content/uploads/2013/03/kansascity-18thandvine0011.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Explore KC
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              A different way to explore the city.
            </Typography>
          </CardContent>
      </Card>

      <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image="https://assets.vogue.com/photos/5beb5d3f7509832ced4424f3/16:9/w_1280,c_limit/00-social-image-kansas-city-missouri-travel-guide.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              KC's Top BBQ Restaurants
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Our program challenges you to visit the best BBQ spots in the area
            </Typography>
          </CardContent>
      </Card>
      
      <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image="https://cdn.shopify.com/s/files/1/0818/5843/products/All-Meat_062483af-3828-49c0-821a-fc8b1eab09cd.jpg?v=1592253595"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              KC's Top BBQ Restaurants
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Our program challenges you to visit the best BBQ spots in the area
            </Typography>
          </CardContent>
      </Card>
      </div>
    );
  }