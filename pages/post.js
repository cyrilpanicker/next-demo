import axios from 'axios';
import DefaultLayout from '../layouts/Default';

const Post = props => (
    <DefaultLayout>
        <h1>{props.show.name}</h1>
        <div>{props.show.summary.replace(/<[/]?p>/g, '')}</div>
        <img src={props.show.image.medium}/>
    </DefaultLayout>
);

Post.getInitialProps = context => {
    return axios.get('https://api.tvmaze.com/shows/'+context.query.id).then(
        response => {
            return {show:response.data};
        },
        error => console.log(error)
    );
};

export default Post;