import express, {Application, Request, Response} from "express";
import cors from "cors";
import  todo  from "./Router/todoRouter";
import car from "./Router/ServicesRouter"

const port: number = 2220;

const app: Application = express();

app.use(cors()).use(express.json()).use("/api/todo/", todo).use("/api/car/", car)

const server = app.listen(port, () => {
  console.log("");
  console.log("listening on port 🚀🚀🚀");
});

process.on("uncaughtExpection", (err) => {
  console.log("server is shutting down due to uncaught exception");
  console.log("uncaught exception", err);
  process.exit(1);
});
process.on("unhandledRejections", (reason) => {
  console.log("server is shutting down due to unhandledRejections");
  console.log("unhandledRejections", reason);
  server.close(() => {
    process.exit(1);
  });
});

