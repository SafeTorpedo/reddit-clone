import { BiUpvote, BiEdit } from "react-icons/bi";
import { BsReply } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { usePost } from "../context/Provider";
import CommentList from "./CommentList";
import { useState } from "react";
import Form from "./Form";
import { deleteComment, newComment, updateComment } from "../api";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContentText from "@mui/material/DialogContentText";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

const formatter = new Intl.DateTimeFormat(undefined, {
    dateStyle: "short",
    timeStyle: "short",
});

interface IData {
    data: {
        id: string;
        comment: string;
        createdAt: string;
        user: {
            name: string;
        };
    };
}

const Comment = ({ data }: IData) => {
    const { replies, post } = usePost();

    const child = replies(data.id);
    const [reply, setReply] = useState(false);
    const [edit, setEdit] = useState(false);

    const onReply = async (comment: string) => {
        setReply(false);

        await newComment(post.id, data.id, comment);
    };

    const onUpdate = async (comment: string) => {
        setEdit(false);

        await updateComment(post.id, data.id, comment);
    };

    const onDelete = async () => {
        setOpen(false);

        await deleteComment(post.id, data.id);
    };

    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
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
                        onClick={() => setOpen(true)}
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
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle id="alert-dialog-title">Confirmation</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Do you want to delete this comment?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={onDelete}>Delete</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default Comment;
