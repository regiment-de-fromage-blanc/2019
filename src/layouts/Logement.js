import {makeStyles} from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    IconButton,
    Typography,
    Collapse
} from '@material-ui/core/';
import React from 'react';
import crousChamber from '../assets/img/Logement/external-content.duckduckgo.com.jpeg';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    header: {
        margin: 'auto',
        height: '60px',
        width: '800px'
    },
    media: {
        width: '80%',
        height: '600px',
        // paddingTop: '56.25%', // 16:9
        margin: 'auto'
    },
    paragraphDiv: {
        width: '100%',
        height: '100%',
        display: 'flex',
        margin: 'auto'
    },
    paragraph2: {
        width: '100%',
        height: '100%'
    },
    parag: {
        fontSize: '16px',
        marginLeft: '30px'
    },
    card: {
        width: '100%',
        textAlign: 'center',
        fontSize: "24px"
    },
    expand: {
        margin: 'auto'
    },
    img: {
        width: '95px',
        height: '95px',
        marginLeft: '30%',
        marginTop: 'auto',
        marginBottom: 'auto'
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    }
}));

export default function Personal() {
    const classes = useStyles();

    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
            <Card className={classes.card}>
                <CardHeader
                    title="Tu cherches à trouver un logement pas cher et près de ton école ?"
                    subheader="La réponse se trouve au Crous"
                />
                <CardMedia
                    className={classes.media}
                    image={crousChamber}
                    title="Logement Crous"
                />
                <CardContent>
                    <Typography variant="body1" component="p">
                        Pour trouver ton appartement au Crous, tu peux te renseigner <a
                        href="https://trouverunlogement.lescrous.fr/">avec ce lien</a>.
                    </Typography>
                    <Typography variant="body1" component="p">
                        (Si tu préfères avoir un contact humain, tu peux aussi aller dans l'un des Crous de ta ville pour
                        te renseigner)
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton
                        // className={clsx(classes.expand, {
                        //     [classes.expandOpen]: expanded,
                        // })}
                        className={classes.expand}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon/>
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography>
                            Lien complémentaire <a href="https://www.lokaviz.fr/">ici</a>.
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
    )
}