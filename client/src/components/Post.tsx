import { usePost } from "../context/Provider";
import CommentList from "./CommentList";

const Post = () => {
    const { post, root } = usePost();

    return (
        <>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <h2>Comments</h2>
            <section>
                {root ? <CommentList data={root} /> : <h3>No comments</h3>}
            </section>
        </>
    );
};

export default Post;
