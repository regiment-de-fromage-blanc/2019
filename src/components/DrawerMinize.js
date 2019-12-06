import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Drawer, ListItem, ListItemIcon, makeStyles, ListItemText } from '@material-ui/core';
import List from '@material-ui/core/List';
import clsx from 'clsx';
import React from 'react';
import TranslateContentMenu from '../variables/TranslateContentMenu';
import {Link} from "react-router-dom";
import {Trans} from "react-i18next";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('xs')]: {
            width: theme.spacing(9) + 1,
        },
    },
}));

function DrawerMinimize(props) {
    const classes = useStyles();
    const displayCurrentLanguage = localStorage.i18nextLng === 'fr' ? 'Translate' : 'Traduire';
    return(
        <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
                [classes.drawerOpen]: props.open,
                [classes.drawerClose]: !props.open,
            })}
            classes={{
                paper: clsx({
                    [classes.drawerOpen]: props.open,
                    [classes.drawerClose]: !props.open,
                }),
            }}
            open={props.open}
        >
            <div className={props.toolbarClass} />
            <List>
                <ListItem button key="Collapse" onClick={props.toggleDrawer}>
                    <ListItemIcon><FontAwesomeIcon icon="bars" size="2x"/></ListItemIcon>
                </ListItem>
                {
                    props.logon ? null : (
                        <ListItem button key="register" alignItems="center" to="register" component={Link}>
                        <ListItemIcon><FontAwesomeIcon icon="plus-circle" size="2x" /></ListItemIcon>
                        <ListItemText><Trans i18nKey="register"/></ListItemText>
                    </ListItem>
                    )
                }
                <ListItem button key="login/logout" alignItems="center" onClick={props.openLogin} component={Link}>
                    <ListItemIcon><FontAwesomeIcon icon="sign-in-alt" size="2x" /></ListItemIcon>
                    <ListItemText><Trans i18nKey={props.logon ? "logout" : "login"}/></ListItemText>
                </ListItem>
                <TranslateContentMenu/>
                <ListItem button onClick={props.changeLanguage}>
                    <ListItemIcon><FontAwesomeIcon icon="flag" size="2x"/></ListItemIcon>
                    <ListItemText primary={displayCurrentLanguage} />
                </ListItem>
            </List>
        </Drawer>
    )};

export default DrawerMinimize;