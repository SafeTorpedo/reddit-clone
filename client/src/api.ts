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
    //pass parentId and comment as headers
    console.log(parentId);

    return await api.post(
        `/posts/${postId}/comments`,
        {
            parentId: parentId,
            comment: comment,
        },
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
};

export { get, getPosts, newComment };
