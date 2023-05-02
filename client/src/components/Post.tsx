import { newComment } from "../api";
import { usePost } from "../context/Provider";
import CommentList from "./CommentList";
import Form from "./Form";
import Navbar from "./Navbar";

const Post = () => {
    const { post, root } = usePost();

    const onCommentCreate = async (comment: string) => {
        await newComment(post.id, null, comment);
    };

    return (
        <>
            <Navbar />
            <div className="m-10">
                <h1 className="p-2 font-medium text-2xl">{post.title}</h1>
                <p className="p-2 text-lg">{post.body}</p>
                <h2 className="p-2 text-xl">Comments</h2>
                <section className="p-2">
                    <Form onSubmit={onCommentCreate} />
                    {root ? <CommentList data={root} /> : <h3>No comments</h3>}
                </section>
            </div>
        </>
    );
};

export default Post;
