import bodyParser from "body-parser";
import express from "express";
import { doPost } from "../services/HTTPRequestAPI";

function authModule(req, res) {
  if (req.method == "POST") {
    const userInfo = req.body;
    console.log(userInfo);

    doPost(`${process.env.API_KEY}venus/authenticate`, userInfo)
      .then((response) => {
        console.log("Response", response);
        res.send(response);
      })
      .catch((error) => {
        console.log("ERROR:", error);
        res.send(error);
      });
  }
}

export default authModule;
