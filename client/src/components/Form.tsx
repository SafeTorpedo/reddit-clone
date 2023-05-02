import { useState } from "react";

const Form = ({
    onSubmit,
    initial = "",
}: {
    onSubmit: (comment: string) => void;
    initial?: string;
}) => {
    const [comment, setComment] = useState(initial);
    const handleSubmit = (e: React.FormEvent) => {
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
                <div className="m-2">
                    <button className="bg-orange-600 hover:bg-orange-800 text-white font-bold py-2 px-4 rounded-full">
                        Post
                    </button>
                </div>
            </div>
        </form>
    );
};

export default Form;
