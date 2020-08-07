import React from 'react';
import {Typography} from '@material-ui/core';
import './_ProfileInfo.scss';

export default function ProfileInfo ({ratings}) {
    return (
        <Typography className="ratings" variant="h4">
            Number of restaurants visited: {ratings}
        </Typography>
    )
}

