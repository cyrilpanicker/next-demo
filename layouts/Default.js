import { Component } from 'react';
import React from 'react';
import Head from 'next/head';
import NProgress from 'nprogress';
import Router from 'next/router';
import SideMenu from '../components/SideMenu';

NProgress.configure({ showSpinner: false });
Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

class DefaultLayout extends React.Component{
    render(){
        return (
            <div>
                <Head>
                    <link rel='stylesheet' href='/static/styles/reset.css' />
                    <link rel='stylesheet' href='/static/styles/nprogress.css' />
                </Head>
                <SideMenu categories={this.props.categories}></SideMenu>
                <div className="content-container">
                    {this.props.children}
                </div>
                <style jsx>{`
                    .content-container{
                        float: left;
                        width: 83vw;
                        height: 100vh;
                        overflow: hidden;
                    }
                `}</style>
            </div>
        );
    }
}

export default DefaultLayout;