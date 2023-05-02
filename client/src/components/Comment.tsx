import { BiUpvote, BiEdit } from "react-icons/bi";
import { BsReply } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { usePost } from "../context/Provider";
import CommentList from "./CommentList";

const formatter = new Intl.DateTimeFormat(undefined, {
    dateStyle: "short",
    timeStyle: "short",
});

const Comment = ({ data }) => {
    const { replies } = usePost();
    const child = replies(data.id);

    return (
        <>
            <div>
                <p>{data.user.name}</p>
                <p>{formatter.format(Date.parse(data.createdAt))}</p>
                <h3>{data.comment}</h3>
                <div>
                    <BiUpvote className="inline" />
                    10
                    <BsReply className="inline" />
                    <BiEdit className="inline" />
                    <AiFillDelete className="inline" color="red" />
                </div>
            </div>
            {child ? (
                <div className="ml-4">
                    <CommentList data={child} />
                </div>
            ) : null}
        </>
    );
};

export default Comment;
