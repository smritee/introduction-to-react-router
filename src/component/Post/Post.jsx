import { Link } from "react-router-dom";

const Post = ({post}) => {
    const{id,title,body} = post;
    const postStyle={
        border: '2px solid yellow',
        padding:'10px',
        borderRadius:'20px'
    }    
    return (
        <div style={postStyle}>
            <h3>Title:{title}</h3>
            <p>{body}</p>
            <p><Link to={`/post/${id}`}>Show Details</Link></p>
        </div>
    );
};

export default Post;