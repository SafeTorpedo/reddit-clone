import Comment from "./Comment";

const CommentList = ({ data }) => {
    return (
        <>
            {data.map((comment) => {
                return <Comment key={comment.id} data={comment} />;
            })}
        </>
    );
};

export default CommentList;
