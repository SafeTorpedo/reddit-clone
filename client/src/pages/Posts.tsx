import { useState } from "react";
import List from "../components/List";
import Navbar from "../components/Navbar";

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { newPost } from "../api";

const Posts = () => {
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setOpen(false);

        await newPost(title, body);
    };
    return (
        <>
            <Navbar />
            <List />
            {/* button to create a new post */}
            <div className="fixed bottom-0 right-0 m-4">
                <button
                    onClick={() => setOpen(true)}
                    className="bg-orange-600 hover:bg-orange-800 text-white font-bold py-2 px-4 rounded-full"
                >
                    Create Post
                </button>
                <Dialog fullWidth open={open} onClose={handleClose}>
                    <DialogTitle>Create New Post</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="title">
                                        Enter Post Title
                                    </label>
                                    <br />
                                    <input
                                        className="border border-black rounded-3xl p-2 m-2 w-full"
                                        type="text"
                                        name="title"
                                        id="title"
                                        value={title}
                                        onChange={(e) =>
                                            setTitle(e.target.value)
                                        }
                                    />
                                </div>
                                <div>
                                    <label htmlFor="body">
                                        Enter Post Body
                                    </label>
                                    <br />
                                    <textarea
                                        className="border border-black rounded-3xl p-2 m-2 w-full"
                                        name="body"
                                        id="body"
                                        value={body}
                                        onChange={(e) =>
                                            setBody(e.target.value)
                                        }
                                    />
                                </div>
                                <div className=" float-right">
                                    <button
                                        type="submit"
                                        className=" m-1 bg-orange-600 hover:bg-orange-800 text-white font-bold py-2 px-4 rounded-full"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </DialogContentText>
                    </DialogContent>
                </Dialog>
            </div>
        </>
    );
};

export default Posts;
