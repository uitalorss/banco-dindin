import express from "express";
import { categoriesRouter } from "./routes/categories.routes";
import { userRoutes } from "./routes/users.routes";

const app = express();
app.use(express.json());
app.use("/users", userRoutes);
app.use("/categories", categoriesRouter);


app.listen(3000);