import express, { Request, Response } from "express";

const router = express.Router();

router.get("/", (_: Request, res: Response) => {
  return res.status(200).json({ version: "v1.0.1" });
});



export default router