const express = require("express");
const app = express();
const router = express.Router();

// const booksRouter = require("./routes/books");
// const swaggerRouter = require("./routes/swagger");


//!>-------------------- public route


const booksRouter = require("./books");
router.use("/books", booksRouter);


const swaggerRouter = require("./swagger");
router.use("/api-docs", swaggerRouter);


app.use((err, req, res) => {
  res.sendStatus(500).send(err.message);
});
//*>---------------------- module export

module.exports = router;
