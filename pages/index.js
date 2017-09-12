import React from 'react';
import {Link} from '../routes';
import axios from 'axios';
import DefaultLayout from '../layouts/Default';

import Slider from '../components/Slider';

class Index extends React.Component{
    static getInitialProps(context){
        return axios.get('http://localhost:8080/api/home').then(
            response => {
                return {
                    data:response.data,
                    status:response.status
                }
            },
            error => {
                return {
                    data:null,
                    status:error.response.status
                }
            }
        );
    }
    render(){
        return (
            <DefaultLayout categories={this.props.data.categories}>
                <Slider images={this.props.data.images}></Slider>
            </DefaultLayout>
        );
    }
}

export default Index;