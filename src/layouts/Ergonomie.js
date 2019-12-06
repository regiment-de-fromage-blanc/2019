import React from "react";
import {withTranslation} from "react-i18next";
import {websiteTree} from "../assets/constants/websiteTree";
import {Card, CardHeader, CardMedia, Fab, Grid, IconButton, makeStyles, Typography} from "@material-ui/core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: '95%',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    root: {
        '& > *': {
            margin: theme.spacing(1)
        }
    }
}));

function Ergonomie({t}) {
    const classes = useStyles();

    const [values, setValues] = React.useState({
        current: websiteTree,
        tree: websiteTree
    });

    function decodeTree(element) {
        if (!element.links) {
            window.open(element.url, "_self")
        } else {
            setValues(oldValues => ({
                ...oldValues,
                current: element,
            }));
        }
    }

    function decodeKeyDown(event) {
        const n = Number(String.fromCharCode(event.keyCode));
        if (n < values.current.links.length) {
            decodeTree(values.current.links[n]);
        } else {
            decodeTree(values.tree);
        }
    }

    return (
        <Grid container alignContent="center" alignItems="center" onKeyDown={decodeKeyDown}>
            {
                values.current.links.map((element, index) =>
                    (
                        <Grid item xs={12} md={8} lg={6} xl={4} key={index}>
                            <Card className={classes.card}>
                                <CardHeader
                                    avatar={
                                        <Typography
                                            variant="h2"
                                            component="h2"
                                        >
                                            {index}
                                        </Typography>
                                    }
                                    action={
                                        <IconButton aria-label="Settings">
                                            <FontAwesomeIcon
                                                icon="arrow-alt-circle-down"
                                            />
                                        </IconButton>
                                    }
                                    title={<Typography
                                                variant="h5"
                                                component="h5"
                                            >
                                                {element.name}
                                            </Typography>
                                            }
                                    onClick={() => decodeTree(element)}
                                />
                                <CardMedia
                                    className={classes.media}
                                    image={element.img}
                                    title={t('favoriteBrowser')}
                                />
                            </Card>
                        </Grid>
                    )
                )
            }
            <Grid container className={classes.root}>
                {
                    !values.current.links[0].url ? null : (
                        <Fab color="primary" aria-label="arrow" onClick={() => decodeTree(values.tree)}>
                            <KeyboardArrowUpIcon/>
                        </Fab>
                    )
                }
            </Grid>
        </Grid>
    );
}

export default withTranslation()(Ergonomie);
