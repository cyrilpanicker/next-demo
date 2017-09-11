import Link from 'next/link';
import axios from 'axios';
import DefaultLayout from '../layouts/Default';

const Index = (props) => (
    <DefaultLayout>
        <h1>Batman TV Shows</h1>
        <ul>
            {props.shows.map(({show}) => (
                <li key={show.id}>
                    <Link as={'/post/'+show.id} href={'/post?id='+show.id}>
                        <a>{show.name}</a>
                    </Link>
                </li>
            ))}
        </ul>
        <style jsx>
            {`
                h1, a{
                    font-family: "Arial";
                },
                ul{
                    padding: 0;
                }
                li{
                    list-style: none;
                    margin: 5px 0;
                }
                a{
                    text-decoration: none;
                    color: blue;
                }
                a:hover{
                    opacity: 0.6
                }
            `}
        </style>
    </DefaultLayout>
);

Index.getInitialProps = () => {
    return axios.get('https://api.tvmaze.com/search/shows?q=batman').then(
        response => {
            return {shows:response.data};
        },
        error => console.log(error)
    );
};

export default Index;