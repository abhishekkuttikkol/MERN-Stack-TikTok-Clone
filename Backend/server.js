import express from "express";
import mongoose from "mongoose";
import data from "./data.js";
import Data from "./data.js";
import Videos from "./dbModel.js";

// app config
const app = express();
const port = process.env.PORT || 9000;

// Middlewares
app.use(express.json());
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*'),
    res.setHeader('Access-Control-Allow-Header','*'),
    next()
})

// DB config
const connection_url =
  "mongodb+srv://admin:{password}@cluster0.vra2k.mongodb.net/posts?retryWrites=true&w=majority";

mongoose.connect(connection_url);

// APi end points
app.get("/", (req, res) => {
  res.status(200).send("MERN Stack TikTok Clone");
});

app.get("/v2/posts", (req, res) => {
  Videos.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.get("/v1/posts", (req, res) => {
  res.status(200).send(Data);
});

app.post("/v2/posts", (req, res) => {
  const dbVideos = req.body;
  Videos.create(dbVideos, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

// Listen
app.listen(port, () => {
  console.log(`listening on localhost:${port}`);
});

//NEa00eIOqUukuhK4
//NEa00eIOqUukuhK4
