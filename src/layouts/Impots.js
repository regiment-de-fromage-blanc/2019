import React from 'react';
import {Card, CardContent, CardMedia, Container, Grid, Typography} from '@material-ui/core';
import { withTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import impotsImage from "../assets/img/impots/impots.jpg";
import revenuImage from "../assets/img/impots/revenu.jpg";
import habitationImage from "../assets/img/impots/taxeHabitation.jpg";
import audiovisuelImage from "../assets/img/impots/audiovisuel.jpg";
import infosImage from "../assets/img/impots/impotsgouv.png";

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
    }
}));

function Impots({t}) {
    const classes = useStyles();
    return (
        <Container maxWidth="xl">
            <Typography variant="h3" component="h1" id="titre-impots" className={classes.padding}>{t('taxes')}</Typography>
            <Typography variant="h4" component="h2"  id="sous-titre-impots" className={classes.padding}>
                {t('titleImpots')}
            </Typography>
            <Grid container>
                <Grid item lg={12} className={classes.padding}>
                    <Card>
                        <CardMedia
                            className={classes.media}
                            image={impotsImage}
                            title="impots"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="h3">
                                {t('titleTypesImpots')}
                            </Typography>
                            <Typography variant="body1" color="textSecondary" component="p">
                                {t('typesImpots')}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item lg={12} className={classes.padding}>
                    <Card>
                        <CardMedia
                            className={classes.media}
                            image={revenuImage}
                            title="Revenu"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="h3">
                                {t('titleRevenu')}
                            </Typography>
                            <Typography variant="body1" color="textSecondary" component="p">
                                {t('revenu')}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item lg={12} className={classes.padding}>
                    <Card>
                        <CardMedia
                            className={classes.media}
                            image={habitationImage}
                            title="TaxeHabitation"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="h3">
                                {t('titleHabitation')}
                            </Typography>
                            <Typography variant="body1" color="textSecondary" component="p">
                                {t('habitation')}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item lg={12} className={classes.padding}>
                    <Card>
                        <CardMedia
                            className={classes.media}
                            image={audiovisuelImage}
                            title="audiovisuel"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="h3">
                                {t('titleAudiovisuel')}
                            </Typography>
                            <Typography variant="body1" color="textSecondary" component="p">
                                {t('audiovisuel')}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item lg={12} className={classes.padding}>
                    <Card>
                        <CardMedia
                            className={classes.media}
                            image={infosImage}
                            title="PlusInfos"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="h3">
                                {t('titleInfos')}
                            </Typography>
                            <Typography variant="body1" color="textSecondary" component="p">
                                {t('infos')}
                                <a href="https://www.impots.gouv.fr">ici</a>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}
export default withTranslation()(Impots)