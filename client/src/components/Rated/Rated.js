import React from 'react';
import './_Rated.scss';
import { Typography, Grid, Card, CardHeader, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: 425,
        maxHeight: 425
    },
    grid: {
        margin: "8px"
    }
}))

export default function Rated() {

    const classes = useStyles()
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (

        <div>
            <Grid container spacing={2} className={classes.grid}>
                {/*for each rated restaurant in the database, map to a new Accordian component */}
                <Card classeName={classes.root}>
                    <CardHeader title="Rated Restaurant" className="title" />
                    <CardContent>
                        <Grid item xs={12} md={6}>
                            <Typography>Overall Rating: </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography>Staff Sassiness: </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography>Bathroom Cleanliness: </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography>Favorite dish: </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography>Three words that describe this restaurant: </Typography>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>

        </div>
    );
}