import { BiUpvote, BiEdit } from "react-icons/bi";
import { BsReply } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { usePost } from "../context/Provider";
import CommentList from "./CommentList";
import { useState } from "react";
import Form from "./Form";
import { newComment } from "../api";

const formatter = new Intl.DateTimeFormat(undefined, {
    dateStyle: "short",
    timeStyle: "short",
});

const Comment = ({ data }) => {
    const { replies, post } = usePost();

    const child = replies(data.id);
    const [reply, setReply] = useState(false);

    const onReply = async (comment) => {
        console.log(post.id, data.id, comment);

        await newComment(post.id, data.id, comment);
        setReply((prev) => !prev);
    };
    return (
        <>
            <div>
                <p>{data.user.name}</p>
                <p>{formatter.format(Date.parse(data.createdAt))}</p>
                <h3>{data.comment}</h3>
                <div>
                    <BiUpvote className="inline" />
                    10
                    <BsReply
                        onClick={() => setReply((prev) => !prev)}
                        className="inline"
                        color={reply ? "black" : "grey"}
                    />
                    <BiEdit className="inline" />
                    <AiFillDelete className="inline" color="red" />
                </div>
            </div>
            {reply ? (
                <div className="mt-2 ml-4">
                    <Form onSubmit={onReply} />
                </div>
            ) : null}
            {child ? (
                <div className="ml-4">
                    <CommentList data={child} />
                </div>
            ) : null}
        </>
    );
};

export default Comment;
