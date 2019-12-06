import {Container, Grid, Typography} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import {makeStyles} from '@material-ui/core/styles';
import React from 'react';
import student from '../assets/img/website/student.png';
import rick from '../assets/img/rick/rick.png';
import Video from './Video';
import {withTranslation} from 'react-i18next';


const useStyles = makeStyles({
    root: {
        width: '100%',
        paddingBottom: '2em',
        paddingTop: '2em'
    },
});

function Header({t}) {
    const [elapsedTime, setElapsedTime] = React.useState(false);
    const [video, setVideo] = React.useState(false);
    const [STOPIT, setSTOPIT] = React.useState(false);
    const classes = useStyles();

    function onTimerElapsed() {
        if(!STOPIT) {
            setElapsedTime(true);
        }
    }

    function onLaunchRickroll() {
        if(!STOPIT) {
            setVideo(true);
        }
    }

    function onEndRickroll() {
        setVideo(false);
        setElapsedTime(false);
        setSTOPIT(true);
    }

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
                            {elapsedTime ?
                                <img width="30%" src={rick} onLoad={() => setTimeout(onLaunchRickroll, 10000)} alt="rick"/> :
                                <img width="30%" src={student} onLoad={() => setTimeout(onTimerElapsed, 50000)} alt="student"/>
                            }
                        </figure>
                    </Grid>
                    <Grid item lg={10}>
                        <Typography variant="h1" component="h1" gutterBottom>{t('titleWebsite')}</Typography>
                        <Typography variant="h2" component="h2" gutterBottom>{t('phraseAccroche')}</Typography>
                    </Grid>
                </Grid>
                {video ? <Video onLoad={setTimeout(onEndRickroll, 61000)}/> : null}
            </Container>
        </React.Fragment>
    );
}

export default withTranslation()(Header);