import Comment from "./Comment";

interface IRoot {
    data: string[];
}

const CommentList = ({ data }: IRoot) => {
    return (
        <>
            {data.map((comment) => {
                return <Comment key={comment.id} data={comment} />;
            })}
        </>
    );
};

export default CommentList;
