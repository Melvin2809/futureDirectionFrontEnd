/* eslint-disable no-console */
const express = require("express");
const cors = require('cors');
const { join } = require("path");
const morgan = require("morgan");
const app = express();

// Configure CORS options
const corsOptions = {
  origin: 'http://localhost:3000', // Mettez ici l'origine de votre application
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(morgan("dev"));
app.use(express.static(join(__dirname, "dist")));

app.use((_, res) => {
  res.sendFile(join(__dirname, "dist", "index.html"));
});

app.listen(3000, () => console.log("Listening on port 3000"));
