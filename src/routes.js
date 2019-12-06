import React from 'react';
const Ergonomie = React.lazy(() => import('./layouts/Ergonomie'));
const Page404 = React.lazy(() => import('./layouts/Page404'));
const About = React.lazy(() => import('./layouts/About'));
const Timeline = React.lazy(() => import('./layouts/Timeline'));
const Dashboard = React.lazy(() => import('./layouts/Dashboard'));
const Personnal = React.lazy(() => import('./layouts/Personal'));
const Logement = React.lazy(() => import('./layouts/Logement'));
const Nutrition = React.lazy(() => import('./layouts/Nutrition'));
const Impots = React.lazy(() => import("./layouts/Impots"));
const Register = React.lazy(() => import('./layouts/Register'));

const routes = [
  {
    path: '/',
    exact: true,
    main: () => <Dashboard/>
  },
  {
    path: '/about',
    main: () => <About/>
  },
  {
    path: '/timeline',
    main: () => <Timeline/>
  },
  {
    path: '/personal',
    main: () => <Personnal/>
  },
  {
    path: '/nutrition',
    main: () => <Nutrition/>
  },
  {
    path: '/user-experience',
    main: () => <Ergonomie/>
  },
  {
    path: '/impots',
    main: () => <Impots/>
  },
  {
    path: '/Logement',
    main: () => <Logement/>
  },
  {
    path: '/register',
    main: () => <Register/>
  },
  {
    path: '/*',
    main: (props) => <Page404 data={props} />
  }
];

export default routes;
