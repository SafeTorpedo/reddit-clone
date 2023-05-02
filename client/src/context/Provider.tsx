import React, { useState, useEffect, useContext, useMemo } from "react";
import { getPosts } from "../api";
import { useParams } from "react-router-dom";
const context = React.createContext({});

const usePost = () => {
    return useContext(context);
};

interface IChildren {
    children: React.ReactNode;
}

const Provider = ({ children }: IChildren) => {
    const [post, setPost] = useState([]);
    const [comments, setComments] = useState({});
    const [root, setRoot] = useState([]);

    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    useEffect(() => {
        getPosts(id).then((res) => {
            setPost(res.data);

            setLoading(false);
            const temp = res.data;

            const nest = {};
            temp.comment.forEach((comment) => {
                nest[comment.parentId] ||= [];
                nest[comment.parentId].push(comment);
            });

            setComments(nest);
            setRoot(nest[null]);
        });
    }, [comments]);

    const replies = (parentId: string) => {
        return comments[parentId];
    };

    if (loading) {
        return (
            <div className="font-bold text-4xl text-center text-orange-600">
                Loading...
            </div>
        );
    }

    return (
        <context.Provider
            value={{
                post: { id, ...post },
                replies,
                root: root,
            }}
        >
            {children}
        </context.Provider>
    );
};

export { Provider, usePost };
