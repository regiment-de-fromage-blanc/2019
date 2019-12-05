import React from 'react';
const About = React.lazy(() => import('./layouts/About'));
const Timeline = React.lazy(() => import('./layouts/Timeline'));
const Dashboard = React.lazy(() => import('./layouts/Dashboard'));
const Personnal = React.lazy(() => import('./layouts/Personal'));


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
    main: () => <Personnal  />
  }
];

export default routes;
