import React from 'react';
import {Link} from '../routes';

class ProductItem extends React.Component{
    render(){
        return (
            <div className="product">
                <Link route={'/products/'+this.props.id}>
                    <img src={this.props.image} />
                </Link>
                <style jsx>{`
                    .product{
                        cursor:pointer;
                    }
                `}</style>
            </div>
        );
    }
}

export default ProductItem;