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
    origin: ["https://medicine-e-commerce-three.vercel.app"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Server Running");
});

app.use("/api/v1", router);

app.use(globalErrorHandler);

app.use(notFound);

export default app;
