import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import morgan from "morgan";
import path from "path";
import passport from "passport";

// routes
import indexRouter from "./routes/index";
// import categoryRouter from "./routes/category";
// import userRouter from "./routes/user";
// import postRouter from "./routes/post";

// middlewares
// import { errorHandler } from "./middlewares/error-handler";

const app: Express = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use(
  express.json({
    limit: "50mb",
  })
);

// init passportjs
// app.use(passport.initialize());

app.use("/" , indexRouter); //localhost:4000
// app.use("/api/v1/category" ,categoryRouter); //localhost:4000/api/v1/category
// app.use("/api/v1/user" , userRouter); //localhost:4000/api/v1/user
// app.use("/api/v1/post" , postRouter); //localhost:4000/api/v1/post

// use error middleware
// app.use(errorHandler);

app.listen(port, () => {
  console.log(
    `[${process.env.COMPANY_NAME} server]: Server is running at http://localhost:${port}`
  );
});

