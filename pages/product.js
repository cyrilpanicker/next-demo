import React from 'react';
import axios from 'axios';
import {Link} from '../routes';
import DefaultLayout from '../layouts/Default';
import ProductItem from '../components/ProductItem';

class Product extends React.Component{
    static getInitialProps(context){
        return axios.get('http://localhost:8080/api/products/'+context.query.productId).then(
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
                <h2>{this.props.data.selectedProduct.name}</h2>
                <div className="product">
                    <ProductItem key={this.props.data.selectedProduct.id}
                        id={this.props.data.selectedProduct.id}
                        image={this.props.data.selectedProduct.image}
                    >
                    </ProductItem>
                </div>
                <Link route="/"><a className="home-link">Home</a></Link>
                <style jsx>{`
                    h2{
                        font-weight: bold;
                        font-size: 40px;
                        margin-top: 20px;
                        margin-left: 20px;
                    }
                    .product{
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

export default Product;