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
    const { comment, parentId } = req.headers;

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

app.listen(3000, () => {
    console.log("Server is running on port 3000.");
});
