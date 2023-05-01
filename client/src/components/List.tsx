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
        return <div>Loading...</div>;
    }
    return (
        <div>
            {posts.map((post) => {
                return (
                    <h1 key={post.id}>
                        <a href="*">{post.title}</a>
                    </h1>
                );
            })}
        </div>
    );
};

export default List;
