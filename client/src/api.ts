import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true,
});

const get = async (url: string) => {
    return await api.get(url);
};

const getPosts = async (id: string) => {
    return await api.get(`/posts/${id}`);
};

const newComment = async (postId: string, parentId: any, comment: string) => {
    //pass parentId and comment as headers
    console.log(parentId);
    const payload = {
        parentId,
        comment,
    };
    return await api.post(`/posts/${postId}/comments`, payload, {
        headers: {
            "Content-Type": "application/json",
        },
    });
};

const updateComment = async (
    postId: string,
    commentId: string,
    comment: string
) => {
    const payload = { comment };
    return await api.put(`/posts/${postId}/comments/${commentId}`, payload, {
        headers: {
            "Content-Type": "application/json",
        },
    });
};

const deleteComment = async (postId: string, commentId: string) => {
    return await api.delete(`/posts/${postId}/comments/${commentId}`);
};

const newPost = async (title: string, body: string) => {
    const payload = {
        title,
        body,
    };
    return await api.post("/posts", payload, {
        headers: {
            "Content-Type": "application/json",
        },
    });
};

const deletePost = async (postId: string) => {
    return await api.delete(`/posts/${postId}`);
};

export {
    get,
    getPosts,
    newComment,
    updateComment,
    deleteComment,
    newPost,
    deletePost,
};
