import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { deletePost, get } from "../api";
import { AiFillDelete } from "react-icons/ai";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

const List = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(false);
    const [selectedId, setSelectedId] = useState("");
    useEffect(() => {
        get("/posts").then((res) => {
            setPosts(res.data);
            setLoading(false);
        });
    }, [posts]);

    if (loading) {
        return (
            <div className=" font-bold text-4xl text-center text-orange-600">
                Loading...
            </div>
        );
    }

    const handleClose = () => {
        setOpen(false);
    };

    const onDelete = async () => {
        setOpen(false);

        await deletePost(selectedId);
    };
    return (
        <div className=" w-max text-left m-10 font-medium text-orange-600">
            {posts.map((post: { id: string; title: string }) => {
                return (
                    <h1 className=" text-xl underline" key={post.id}>
                        <Link to={`/posts/${post.id}`}>{post.title}</Link>
                        <AiFillDelete
                            onClick={() => {
                                setOpen(true);
                                setSelectedId(post.id);
                            }}
                            color="red"
                            className="inline ml-8"
                        />
                    </h1>
                );
            })}
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle id="alert-dialog-title">Confirmation</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Do you want to delete this post??
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={onDelete}>Delete</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default List;
