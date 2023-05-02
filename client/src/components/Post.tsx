import { newComment } from "../api";
import { usePost } from "../context/Provider";
import CommentList from "./CommentList";
import Form from "./Form";

const Post = () => {
    const { post, root } = usePost();

    const onCommentCreate = async (comment) => {
        await newComment(post.id, null, comment);
    };

    return (
        <>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <h2>Comments</h2>
            <section>
                <Form onSubmit={onCommentCreate} />
                {root ? <CommentList data={root} /> : <h3>No comments</h3>}
            </section>
        </>
    );
};

export default Post;
