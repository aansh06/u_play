import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();



// allows or restricts cross-origin HTTP requests
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" })); // config to  recieved data from form , middleware parses incoming JSON payloads.
app.use(express.urlencoded({ extended: true, limit: "16kb" })); // config to  recieved data from URL , middleware parses incoming URL-encoded form data
app.use(express.static("public")); // middleware serves static files from the "public" directory,allows to serve things like stylesheets, images, and scripts directly without the need for a specific route.
app.use(cookieParser()); // middleware parses cookies attached to the client's request and adds them to the request object as req.cookies



// routes import
import userRouter from './routes/user.routes.js'


//routes declaration
app.use("/api/v1/users", userRouter)




export { app };
