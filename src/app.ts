import express, { Application } from "express";
import notFound from "./app/middlewares/notFound";
import cors from "cors";
import globalErrorHandler from "./app/middlewares/globalErrorhandler";
import router from "./app/routes";
const app: Application = express();

//parsers

app.use(express.json());

app.use(
  cors({
    origin: [
      "https://medicine-e-commerce-three.vercel.app",
      "https://medicine-e-commerce-o2so90b1c-hassans-projects-72e9fd55.vercel.app",
      "*",
    ],
    credentials: false,
    // "https://medicine-e-commerce-o2so90b1c-hassans-projects-72e9fd55.vercel.app",
    // "http://localhost:3000",
  })
);

app.get("/", (req, res) => {
  res.send("Server Running");
});

app.use("/api/v1", router);

app.use(globalErrorHandler);

app.use(notFound);

export default app;
