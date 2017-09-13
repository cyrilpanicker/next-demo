import React from 'react';
import axios from 'axios';
import {Link} from '../routes';
import Error from 'next/error';
import DefaultLayout from '../layouts/Default';
import ProductItem from '../components/ProductItem';
import {proxyApiBasePath,proxyApiUrls} from '../config.js';

class Categories extends React.Component{
    static getInitialProps(context){
        return axios.get(proxyApiBasePath + proxyApiUrls['categories'] + context.query.categoryLevel1).then(
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
        if(this.props.status != 200){
            return <Error statusCode={this.props.status} />
        }
        return (
            <DefaultLayout categories={this.props.data.categories}>
                <h2>{this.props.data.selectedCategory.name}</h2>
                <div className="product-list">
                    {this.props.data.selectedCategory.products.map(product => (
                        <ProductItem key={product.id} id={product.id} image={product.image}></ProductItem>
                    ))}
                </div>
                <Link route="/"><a className="home-link">Home</a></Link>
                <style jsx>{`
                    h2{
                        font-weight: bold;
                        font-size: 40px;
                        margin-top: 20px;
                        margin-left: 20px;
                    }
                    .product-list{
                        display: flex;
                        justify-content: space-around;
                        margin-top: 70px;
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

export default Categories;