import { Container } from '@material-ui/core';
import React from 'react';
import routes from "../routes";



export default function Page404({data}) {

    return (
      routes.findIndex(element => element.path === data.location.pathname) < 0 ?
    <Container maxWidth="lg">
        Page404
    </Container> : null
  )
}