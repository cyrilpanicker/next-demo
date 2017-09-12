import React from 'react';
import {Link} from '../routes';

class SideMenu extends React.Component{
    render(){
        return (
            <div className="side-menu">
                <ul>
                    {this.props.categories && this.props.categories.length && this.props.categories.map(item => (
                        <Link key={item.id} route={'/'+item.id}>
                            <li><a>{item.name}</a></li>
                        </Link>
                    ))}
                    <Link route="/wishlist">
                        <li className="wishlist-item">
                            <a>WishList</a>
                        </li>
                    </Link>
                </ul>
                <style jsx>{`
                    .side-menu{
                        height: 100vh;
                        width: 15vw;
                        background-color: grey;
                        float: left;
                    }
                    .side-menu ul{
                        position: relative;
                        top: 50%;
                        transform: translate(0,-50%);
                    }
                    .side-menu ul li a{
                        display: inline-block;
                        position: relative;
                        left: 50%;
                        transform: translate(-50%,0);
                        margin-bottom: 10px;
                        font-size: 20px;
                        color: pink;
                        text-decoration: none;
                        cursor:pointer
                    }
                    .side-menu ul .wishlist-item a{
                        color:yellowgreen;
                    }
                `}</style>
            </div>
        );
    }
}

export default SideMenu;