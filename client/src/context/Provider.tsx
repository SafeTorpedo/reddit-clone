import React, { useState, useEffect } from "react";
import { getPosts } from "../api";
import { useParams } from "react-router-dom";
const context = React.createContext({});

const Provider = ({ children }) => {
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    useEffect(() => {
        getPosts(id).then((res) => {
            setPost(res.data);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <context.Provider
            value={{
                post: { id, ...post },
            }}
        >
            {children}
        </context.Provider>
    );
};

export default Provider;
