import express from "express";
import type { Express } from "express";
import { get } from "http";

const app: Express =  express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>VGF2P8AFFINEINVQB</h1>");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});