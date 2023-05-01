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

app.listen(3000, () => {
    console.log("Server is running on port 3000.");
});
