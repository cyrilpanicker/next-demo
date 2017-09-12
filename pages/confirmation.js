import React from 'react';
import {Link} from '../routes';
import DefaultLayout from '../layouts/Default';

class Confirmation extends React.Component{
    render(){
        return (
            <DefaultLayout>
                <h2>Confirmation</h2>
                <Link route="/">
                    <a>home</a>
                </Link>
            </DefaultLayout>
        );
    }
}

export default Confirmation;