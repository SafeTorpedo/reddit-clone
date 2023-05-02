import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { get } from "../api";

const List = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        get("/posts").then((res) => {
            setPosts(res.data);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return (
            <div className=" font-bold text-4xl text-center text-orange-600">
                Loading...
            </div>
        );
    }
    return (
        <div className=" w-max text-left m-10 font-medium text-orange-600">
            {posts.map((post) => {
                return (
                    <h1 key={post.id}>
                        <Link to={`/posts/${post.id}`}>{post.title}</Link>
                    </h1>
                );
            })}
        </div>
    );
};

export default List;
