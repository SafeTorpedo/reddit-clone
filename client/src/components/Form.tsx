import { useState } from "react";

const Form = ({ onSubmit, initial = "" }) => {
    const [comment, setComment] = useState(initial);
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(comment);
        setComment("");
    };
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="border border-black"
                />
                <button type="submit">Post</button>
            </div>
        </form>
    );
};

export default Form;
