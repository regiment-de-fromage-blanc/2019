import React from 'react';
import { Grid, Typography, Container, Card, CardMedia, CardContent } from '@material-ui/core';
import { withTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import legumesImage from '../assets/img/nutrition/legumes.jpg';
import ruImage from '../assets/img/nutrition/ru.jpg';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        margin: theme.spacing(1)
    },
    media: {
        height: 360
    },
    padding: {
        paddingTop: 15,
        paddingBottom: 15
    },
  }));

function About({ t }) {
    const classes = useStyles();
  return (
        <Container maxWidth="xl">
            <Typography variant="h3" component="h1" id="titre-nutrition" className={classes.padding}>{t('nutrition')}</Typography>
            <Typography variant="h4" component="h2"  id="sous-titre-nutrition" className={classes.padding}>
                {t('titleNutrition')}
            </Typography>
            <Grid container>
                <Grid item lg={12} className={classes.padding}>
                    <Card>
                        <CardMedia
                            className={classes.media}
                            image={legumesImage}
                            title="legumes"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="h3">
                                {t('titleRepas')}
                            </Typography>
                            <Typography variant="body1" color="textSecondary" component="p">
                                {t('repas')}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item lg={12} className={classes.padding}>
                    <Card>
                        <CardMedia
                            className={classes.media}
                            image={ruImage}
                            title="restoU"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="h3">
                                {t('titleRestoU')}
                            </Typography>
                            <Typography variant="body1" color="textSecondary" component="p">
                                {t('restoU')}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
  )};

  export default withTranslation()(About);