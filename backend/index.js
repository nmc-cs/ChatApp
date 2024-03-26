// import express, runs our http server
// cors lets us call the server from any origin
const express = require("express");
const cors = require("cors");
const axios = require("axios");


const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  // taking username from req body and getting user and chat engine if they exist, if not create
  // user details are recieved and the key allows us to create and destroy users
  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "private-key": "f4e18a24-220f-4009-bc26-a9018ed6647d" } }
    );
    // return data or return error if data is incorrect
    return res.status(r.status).json(r.data);
  } catch (e) {
    if (e.response) {
      return res.status(e.response.status).json(e.response.data);
    } else {
      // Handle the case where e.response is undefined
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
});

app.listen(3001);
