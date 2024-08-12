import express, { Application } from "express";
import notFound from "./app/middlewares/notFound";
import cors from "cors";
import globalErrorHandler from "./app/middlewares/globalErrorhandler";
import router from "./app/routes";
const app: Application = express();
import cookieParser from "cookie-parser";

//parsers

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

app.use("/api/v1", router);

app.get("/", (req, res) => {
  res.send("Server Running");
});

app.use(globalErrorHandler);

app.use(notFound);

export default app;
