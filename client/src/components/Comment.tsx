const formatter = new Intl.DateTimeFormat(undefined, {
    dateStyle: "short",
    timeStyle: "short",
});

const Comment = ({ data }) => {
    return (
        <>
            <div>
                <p>{data.user.name}</p>
                <p>{formatter.format(Date.parse(data.createdAt))}</p>
                <h3>{data.comment}</h3>
            </div>
        </>
    );
};

export default Comment;
