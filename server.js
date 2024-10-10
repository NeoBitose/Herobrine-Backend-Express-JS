require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const morgan = require("morgan");
const webRouter = require("./routes/api");

app.use(express.json())
app.use(morgan());

app.get("/", (req, res) => {
    res.send("This app is running");
});

app.use("/api/v1", webRouter);

app.listen(PORT, () => {
    console.log(`this server is listening on port ${PORT}`);
});

