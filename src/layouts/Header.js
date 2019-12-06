import {Container, Grid, Typography} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import {makeStyles} from '@material-ui/core/styles';
import React from 'react';
import student from '../assets/img/website/student.png';
import {withTranslation} from 'react-i18next';


const useStyles = makeStyles({
    root: {
        width: '100%',
        paddingBottom: '2em',
        paddingTop: '2em'
    },
});

function Header({t}) {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline/>
            <Container className={classes.root} maxWidth="xl">
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <Grid item lg={2}>
                        <figure className="logo">
                            <img width="30%" src={student} alt="me as an octocat"/>
                        </figure>
                    </Grid>
                    <Grid item lg={10}>
                        <Typography variant="h1" component="h1" gutterBottom>{t('titleWebsite')}</Typography>
                        <Typography variant="h2" component="h2" gutterBottom>{t('phraseAccroche')}</Typography>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    );
}

export default withTranslation()(Header);