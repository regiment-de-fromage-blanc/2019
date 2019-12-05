import { Container, Grid, Typography } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import octocat from '../assets/img/website/octocat.png';
import octocatWebp from '../assets/img/website/octocat.webp';
import { withTranslation } from 'react-i18next';

const useStyles = makeStyles({
  root: {
    width: '100%',
    paddingBottom: '2em'
  },
});

function Header({ t }) {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Container className={classes.root} maxWidth="xl">
                <Grid 
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <Grid item>
                        <figure className="logo">
                            <picture >
                                <source width="100%" srcSet={octocatWebp} type="image/webp"/>
                                <img width="100%" src={octocat} alt="me as an octocat"/>
                            </picture>
                        </figure>
                    </Grid>
                    <Grid item >
                        <Typography variant="h2" component="h2" gutterBottom>&lt;HELLO_WORLD/&gt;</Typography>
                        <Typography variant="h1" component="h1" gutterBottom>{t('myNameIs')}</Typography>
                        <Typography variant="h2" component="h2" gutterBottom>{t('myCurrentJob')}</Typography>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    );
}

export default withTranslation()(Header);