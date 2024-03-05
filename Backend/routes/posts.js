import express from "express";
import { getFeed } from "../controllers/post.js";

const router = express.Router();

router.get('/post', getFeed);

export default router;