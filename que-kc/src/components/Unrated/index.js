import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Grid, Button, Input, FormHelperText, FormControl, TextField, InputAdornment, Typography } from '@material-ui/core';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import './_Unrated.scss';

const useStyles = makeStyles((theme) => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));

const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

export default function Unrated() {
  const classes = useStyles();
  return (
    <Accordion>
      <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" className="title">
        <Typography className="restaurantName">Gates</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <FormControl >
              <Input
                id="standard-adornment-weight"
                endAdornment={<InputAdornment position="end">/10</InputAdornment>}
                aria-describedby="standard-weight-helper-text"
                inputProps={{
                  'aria-label': 'weight',
                }}
              />
              <FormHelperText id="standard-weight-helper-text">Food Rating</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item sm={6}>
            <FormControl >
              <Input
                id="standard-adornment-weight"
                endAdornment={<InputAdornment position="end">/10</InputAdornment>}
                aria-describedby="standard-weight-helper-text"
                inputProps={{
                  'aria-label': 'weight',
                }}
              />
              <FormHelperText id="standard-weight-helper-text">Rate the sass of the Staff</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item sm={6}>
            <FormControl >
              <Input
                id="standard-adornment-weight"
                endAdornment={<InputAdornment position="end">/10</InputAdornment>}
                aria-describedby="standard-weight-helper-text"
                inputProps={{
                  'aria-label': 'weight',
                }}
              />
              <FormHelperText id="standard-weight-helper-text">Bathroom Cleanliness</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item sm={6}>
            <FormControl >
              <Input
                id="standard-adornment-weight"
                endAdornment={<InputAdornment position="end">Y/N</InputAdornment>}
                aria-describedby="standard-weight-helper-text"
                inputProps={{
                  'aria-label': 'weight',
                }}
              />
              <FormHelperText id="standard-weight-helper-text">Drive Thru?</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="standard-full-width"
              style={{ margin: 8 }}
              placeholder="Typer your response here!"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <FormHelperText id="standard-weight-helper-text">Favorite Item</FormHelperText>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="standard-full-width"
              style={{ margin: 8 }}
              placeholder="Typer your response here!"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <FormHelperText id="standard-weight-helper-text">Describe this restaurant in 3 words</FormHelperText>
          </Grid>
          <Grid item>
            <Button variant="contained" color="secondary">
              Save
            </Button>
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
}