import { Component } from 'react';
import Head from 'next/head';
import NProgress from 'nprogress';
import Router from 'next/router';
import Header from '../components/Header';

const layoutStyle = {
    margin:20,
    padding:20,
    border:'1px solid black'
};

NProgress.configure({ showSpinner: false });
Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const DefaultLayout = props => (
    <div style={layoutStyle}>
        <Head>
            <link rel='stylesheet' type='text/css' href='/static/styles/nprogress.css' />
        </Head>
        <Header></Header>
        {props.children}
    </div>
);

export default DefaultLayout;