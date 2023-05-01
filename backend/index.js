import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.get("/posts", async (req, res) => {
    const posts = await prisma.post.findMany({
        select: {
            id: true,
            title: true,
        },
    });
    res.json(posts);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000.");
});
