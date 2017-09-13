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
                <Link route="/"><a className="home-link">Home</a></Link>
                <style jsx>{`
                    h2{
                        font-weight: bold;
                        font-size: 40px;
                        margin-top: 20px;
                        margin-left: 20px;
                    }
                    .home-link{
                        margin-top: 60px;
                        display: inline-block;
                        position: relative;
                        left: 50%;
                        transform: translate(-50%);
                    }
                `}</style>
            </DefaultLayout>
        );
    }
}

export default WishList;