import { BiUpvote, BiEdit } from "react-icons/bi";
import { BsReply } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { usePost } from "../context/Provider";
import CommentList from "./CommentList";
import { useState } from "react";
import Form from "./Form";
import { deleteComment, newComment, updateComment } from "../api";

const formatter = new Intl.DateTimeFormat(undefined, {
    dateStyle: "short",
    timeStyle: "short",
});

const Comment = ({ data }) => {
    const { replies, post } = usePost();

    const child = replies(data.id);
    const [reply, setReply] = useState(false);
    const [edit, setEdit] = useState(false);

    const onReply = async (comment) => {
        console.log(post.id, data.id, comment);
        setReply(false);

        await newComment(post.id, data.id, comment);
    };

    const onUpdate = async (comment) => {
        console.log(post.id, data.id, comment);
        setEdit(false);

        await updateComment(post.id, data.id, comment);
    };

    const onDelete = async () => {
        console.log(post.id, data.id);

        await deleteComment(post.id, data.id);
    };

    return (
        <>
            <div className="w-1/2 border border-black rounded-3xl p-2 m-2 ">
                <div className="grid grid-cols-2 text-xs ">
                    <h3>{data.user.name}</h3>
                    <h3 className=" text-right">
                        {formatter.format(Date.parse(data.createdAt))}
                    </h3>
                </div>
                {edit ? (
                    <Form onSubmit={onUpdate} initial={data.comment} />
                ) : (
                    <h3 className=" text-lg font-semibold">{data.comment}</h3>
                )}

                <div className="p-1">
                    <BiUpvote className="inline" />
                    10
                    <BsReply
                        onClick={() => setReply((prev) => !prev)}
                        className="inline ml-4"
                        color={reply ? "black" : "grey"}
                    />
                    <BiEdit
                        onClick={() => setEdit((prev) => !prev)}
                        className="inline ml-4"
                        color={edit ? "black" : "grey"}
                    />
                    <AiFillDelete
                        onClick={onDelete}
                        className="inline ml-4"
                        color="red"
                    />
                </div>
            </div>
            {reply ? (
                <div className=" ml-10">
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
