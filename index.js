const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const low = require("lowdb");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const router = require("./routes/index");

const PORT = process.env.PORT || 4000;

const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("db.json");
const db = low(adapter);

db.defaults({ books: [] }).write();



const app = express();


app.db = db;

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// app.use("/books", booksRouter);

//    app.use("/", router);

    app.use(require("./routes/index"));

// app.use("/api-docs", swaggerRouter);

app.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
