import React from 'react';
import axios from 'axios';
import {Link} from '../routes';
import Error from 'next/error';
import DefaultLayout from '../layouts/Default';
import ProductItem from '../components/ProductItem';

class Categories extends React.Component{
    static getInitialProps(context){
        return axios.get('http://localhost:8080/api/categories/'+context.query.categoryLevel1).then(
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
                    <ProductItem id={'asd'} image={'https://bonobos-prod-s3.imgix.net/products/45214/original/Tops_Casual_Shirts_19315_MTX71_category.jpg?auto=format%2Ccompress&dpr=1&q=75&crop=false&fit=clip&w=200&h=1'}></ProductItem>
                </div>
                <Link route="/"><a>Home</a></Link>
                <style jsx>{`
                    h2{
                        font-weight: bold;
                        font-size: 40px;
                        margin-top: 20px;
                        margin-left: 20px;
                    }
                `}</style>
            </DefaultLayout>
        );
    }
}

export default Categories;