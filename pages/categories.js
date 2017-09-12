import React from 'react';
import DefaultLayout from '../layouts/Default';

class Categories extends React.Component{
    render(){
        const {
            categoryLevel1,categoryLevel2,categoryLevel3
        } = this.props.url.query;
        return (
            <DefaultLayout>
                <h2>
                    {categoryLevel1}
                    {categoryLevel2 &&
                        ' => '+categoryLevel2
                    }
                    {categoryLevel3 &&
                        ' => '+categoryLevel3
                    }
                </h2>
            </DefaultLayout>
        );
    }
}

export default Categories;