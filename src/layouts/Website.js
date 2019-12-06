import {library} from '@fortawesome/fontawesome-svg-core';
import {faFirefox, faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons';
import {
    faAngleDown,
    faArrowAltCircleDown,
    faBars,
    faBriefcase,
    faCarrot,
    faDownload,
    faEnvelope,
    faEye,
    faFilePdf,
    faFlag,
    faHome,
    faPlusCircle,
    faSignInAlt,
    faStar,
    faVenusMars
} from '@fortawesome/free-solid-svg-icons';
import {
    Button,
    CircularProgress,
    Container,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle
} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import React, {Suspense} from 'react';
import {useTranslation, withTranslation} from 'react-i18next';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import DrawerMinimize from '../components/DrawerMinize';
import routes from '../routes';
import Header from './Header';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import TextField from "@material-ui/core/TextField";
import UserUtils from "../utils/UserUtils";

library.add(faTwitter, faLinkedin, faFirefox, faFilePdf, faEnvelope, faBars, faVenusMars, faStar, faBriefcase, faAngleDown, faHome, faFlag, faDownload, faEye, faArrowAltCircleDown, faCarrot, faSignInAlt, faPlusCircle);

function PaperComponent(props) {
    return (
        <Draggable cancel={'[class*="MuiDialogContent-root"]'}>
            <Paper {...props} />
        </Draggable>
    );
}

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex'
    },
    component: {
        marginBottom: theme.spacing(3),
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    title: {
        flexGrow: 1,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    showLoading: {
        position: 'absolute',
        top: '50%',
        left: '50%',
    }
}));

function Website({t}) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [logon, setLogon] = React.useState(false);
    const [openModal, setOpenModal] = React.useState(false);
    const {i18n} = useTranslation();

    function toggleDrawerState() {
        setOpen(!open);
    }

    function toggleLogon() {
        setLogon(!logon);
    }

    function _handleChangeLanguage() {
        const nextLanguage = localStorage.i18nextLng === 'en' ? 'fr' : 'en';
        i18n.changeLanguage(nextLanguage);
    }

    const handleClickOpenModal = () => {
        if (!logon) {
            setOpenModal(true);
        } else {
            toggleLogon();
        }
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const loginFunction = () => {
        UserUtils.login(state.login, state.password);
        handleCloseModal();
        toggleLogon();
    };

    let state = {
        login: '',
        password: ''
    };

    const onChangeValue = (event) => {
        state[event.target.name] = event.target.value;
    }

    return (
        <div className={classes.root}>
            <Router>
                <DrawerMinimize
                    open={open}
                    logon={logon}
                    openLogin={handleClickOpenModal}
                    toggleDrawer={toggleDrawerState}
                    changeLanguage={_handleChangeLanguage}
                    toolbarClass={classes.toolbar}
                />
                <Container maxWidth="xl" className={classes.component}>
                    <Header/>
                    {routes.map((route, index) => (
                        <Suspense
                            fallback={
                                <CircularProgress
                                    color="primary"
                                    size={100}
                                    thickness={4}
                                    className={classes.showLoading}
                                />
                            }
                        >
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                component={route.main}
                            />
                        </Suspense>
                    ))}
                </Container>
            </Router>
            <div>
                <Dialog
                    open={openModal}
                    onClose={handleCloseModal}
                    PaperComponent={PaperComponent}
                    aria-labelledby="draggable-dialog-title"
                >
                    <DialogTitle style={{cursor: 'move'}} id="draggable-dialog-title">
                        {t('login')}
                    </DialogTitle>
                    <DialogContent>
                        <form className={classes.root} noValidate autoComplete="off">
                            <TextField id="filled-basic" name="login" label="Login" variant="filled"
                                       onChange={onChangeValue}/>
                            <TextField id="filled-basic" name="password" label="Password" type="password"
                                       variant="filled" onChange={onChangeValue}/>
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={handleCloseModal} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={loginFunction} color="primary">
                            {t('login')}
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    );
}

export default withTranslation()(Website);