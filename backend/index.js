import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

const corsOptions = {
    origin: "http://localhost:5173",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

app.get("/posts", async (req, res) => {
    const posts = await prisma.post.findMany({
        select: {
            id: true,
            title: true,
        },
    });
    res.json(posts);
});

app.get("/posts/:id", async (req, res) => {
    const posts = await prisma.post.findUnique({
        where: {
            id: req.params.id,
        },
        select: {
            body: true,
            title: true,
            comment: {
                orderBy: {
                    createdAt: "desc",
                },
                select: {
                    id: true,
                    user: {
                        select: {
                            id: true,
                            name: true,
                        },
                    },
                    comment: true,
                    parentId: true,
                    createdAt: true,
                },
            },
        },
    });
    res.json(posts);
});

app.post("/posts/:id/comments", async (req, res) => {
    const { id } = req.params;
    console.log(req.body);

    const { parentId, comment } = req.body;

    return await prisma.comments.create({
        data: {
            comment: comment,
            parentId: parentId,
            userId: "d575b25a-cd17-4041-a51b-43b5ef78fa19",

            postId: id,
        },
        select: {
            id: true,
            user: {
                select: {
                    id: true,
                    name: true,
                },
            },
            comment: true,
            parentId: true,
            createdAt: true,
        },
    });
});

app.put("/posts/:id/comments/:commentId", async (req, res) => {
    const { id, commentId } = req.params;
    const { comment } = req.body;

    return await prisma.comments.update({
        where: {
            id: commentId,
        },
        data: {
            comment: comment,
        },
        select: {
            comment: true,
        },
    });
});

app.delete("/posts/:id/comments/:commentId", async (req, res) => {
    const { id, commentId } = req.params;

    return await prisma.comments.delete({
        where: {
            id: commentId,
        },
    });
});

app.post("/posts", async (req, res) => {
    const { title, body } = req.body;

    return await prisma.post.create({
        data: {
            title: title,
            body: body,
            userId: "d575b25a-cd17-4041-a51b-43b5ef78fa19",
        },
        select: {
            id: true,
            title: true,
            body: true,
        },
    });
});

app.delete("/posts/:id", async (req, res) => {
    const { id } = req.params;

    return await prisma.post.delete({
        where: {
            id: id,
        },
    });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000.");
});
