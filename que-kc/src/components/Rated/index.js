import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import { Typography, Grid } from '@material-ui/core';

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

export default function CustomizedAccordions() {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div>
            <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>Collapsible Group Item #1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container>
                        <Grid item xs={12} md={6}>
                            <Typography>Overall Rating: </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography>Staff Sassiness: </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography>Bathroom Cleanliness </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography>Drive Thru: </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography>Favorite dish: </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography>Three words that describe this restaurant: </Typography>
                        </Grid>

                    </Grid>
                </AccordionDetails>
            </Accordion>

        </div>
    );
}

