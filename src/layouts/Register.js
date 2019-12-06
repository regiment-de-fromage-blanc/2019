import React from 'react';
import {Button, Container} from '@material-ui/core';
import {withTranslation} from 'react-i18next';
import {makeStyles} from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import UserUtils from "../utils/UserUtils";


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        margin: theme.spacing(1)
    }
}));

function Register({t}) {
    const classes = useStyles();

    const registerFunction = () => {
        UserUtils.register(state.login, state.password);
    };

    let state = {
        login: '',
        password: ''
    };

    const onChangeValue = (event) => {
        state[event.target.name] = event.target.value;
    }

    return (
        <Container maxWidth="xl">
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="filled-basic" name="login" label="Login" variant="filled"
                           onChange={onChangeValue}/>
                <TextField id="filled-basic" name="password" label="Password" type="password"
                           variant="filled" onChange={onChangeValue}/>
            </form>
            <Button onClick={registerFunction} color="primary">
                {t('register')}
            </Button>
        </Container>
    )
};

export default withTranslation()(Register);