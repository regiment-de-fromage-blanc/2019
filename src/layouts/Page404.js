import {Container, makeStyles, Typography} from '@material-ui/core';
import React from 'react';
import routes from "../routes";

const useStyles = makeStyles(theme => ({
    root: {
        textAlign: 'center'
    }
}));

export default function Page404({data}) {
    const classes = useStyles();
    return (
        routes.findIndex(element => element.path === data.location.pathname) < 0 ?
            <Container maxWidth="lg">
                <Typography variant="h1" component="h2" className={classes.root}>
                    404 Not Found
                </Typography>
                <canvas>

                </canvas>
            </Container> : null
    )
}