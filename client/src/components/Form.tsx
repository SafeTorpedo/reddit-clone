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
            <div className="p-2">
                <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="border border-black rounded-xl w-1/3 p-2"
                    placeholder="Enter new comment"
                />
                <button
                    type="submit"
                    className=" border-black rounded-lg p-1 border bg-orange-600 text-white ml-2"
                >
                    Post
                </button>
            </div>
        </form>
    );
};

export default Form;
