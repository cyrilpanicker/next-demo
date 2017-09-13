import React from 'react';
import {Link} from '../routes';
import DefaultLayout from '../layouts/Default';

class Checkout extends React.Component{
    render(){
        return (
            <DefaultLayout>
                <h2>Checkout</h2>
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

export default Checkout;