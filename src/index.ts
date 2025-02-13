import express from "express";
import "reflect-metadata";
import cors from "cors";
import sampleModuleRouter from "./modules/sample-module/sample-module.route";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(sampleModuleRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
