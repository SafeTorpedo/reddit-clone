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

const newComment = async (postId, parentId, comment) => {
    return await api.post(`post/${postId}/comments`, {
        Headers: {
            data: { parentId, comment },
        },
    });
};

export { get, getPosts, newComment };
