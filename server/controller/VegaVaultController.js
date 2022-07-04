import express from "express";
import {
  createSecret,
  deleteSecret,
  readSecret,
  shareSecret,
  updateSecret,
} from "../services/VegaVaultAPI.js";

let router = express.Router();

router.get("/", (req, res) => {
  res.send("You are in Vega Vault!");
});

router.get("/:userid/read", (req, res) => {
  console.log("IN GET READ SECRET", req);
  if (req.query.from && req.query.to) {
    console.log("Got dates!!!");
    readSecret(
      `${process.env.API_KEY}venus/vault/${req.params.userid}/from=${req.query.from}&to=${req.query.to}`,
      req.headers
    )
      .then((response) => {
        res.send(response);
      })
      .catch((error) => {
        console.log("Error in getting filtered secrets", error);
        res.send(error);
      });
  } else {
    readSecret(
      `${process.env.API_KEY}venus/vault/${req.params.userid}`,
      req.headers
    )
      .then((response) => {
        //console.log("Response", response);
        res.send(response);
      })
      .catch((error) => {
        console.log("ERROR:", error);
        res.send(error);
      });
  }
});

router.post("/:userid/create", (req, res) => {
  //console.log("IN POST CREATE SECRET", req);
  createSecret(
    `${process.env.API_KEY}venus/vault/${req.params.userid}/add`,
    req.body,
    req.headers
  )
    .then((response) => {
      res.send(response);
    })
    .catch((error) => {
      res.send(error);
    });
});

router.put("/:userid/update", (req, res) => {
  //console.log("GETTING TO UPDATE SECRET");
  updateSecret(
    `${process.env.API_KEY}venus/vault/${req.params.userid}/update`,
    req.body,
    req.headers
  )
    .then((response) => {
      res.send(response);
    })
    .catch((error) => {
      res.send(error);
    });
});

router.delete("/:userid/delete", (req, res) => {
  console.log("GETTING TO DELETE", req.params, req.body);
  deleteSecret(
    `${process.env.API_KEY}venus/vault/${req.params.userid}/delete`,
    req.body,
    req.headers
  )
    .then((response) => {
      res.send(response);
    })
    .catch((error) => {
      res.send(error);
    });
});

router.put("/:userid/share", (req, res) => {
  console.log("Got to API sharing", req.params, req.body);
  shareSecret(
    `${process.env.API_KEY}venus/vault/${req.params.userid}/share`,
    req.body,
    req.headers
  )
    .then((response) => {
      res.send(response);
    })
    .catch((error) => {
      res.send(error);
    });
});

export default router;
