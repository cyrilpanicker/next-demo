import React from 'react';
import axios from 'axios';
import DefaultLayout from '../layouts/Default';
import {Link} from '../routes';

class WishList extends React.Component{
    static getInitialProps(context){
        return axios.get('http://localhost:8080/api/wishlist').then(
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
                <h2>WishList</h2>
                <Link route="/">
                    <a>Home</a>
                </Link>
            </DefaultLayout>
        );
    }
}

export default WishList;