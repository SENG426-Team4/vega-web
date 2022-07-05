import bodyParser from "body-parser";
import express from "express";
import {
  uploader,
  listFiles,
  fetchcontent,
} from "../services/FileHandlerAPI.js";
import fileUpload from "express-fileupload";

let router = express();

//router.use(bodyParser.json({'limit':'20mb'}));

router.use(
  fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
  })
);

router.post("/upload", (req, res) => {
  var formData = req.files;
  console.log("Entered into File uploader", formData);
  uploader(
    `${
      process.env.REACT_APP_BACKEND_KEY || "http://localhost:8080/"
    }venus/admin/handlefileupload`,
    formData,
    req.headers
  )
    .then((response) => {
      console.log("Response", response);
      res.send(response);
    })
    .catch((error) => {
      console.log("ERROR:", error);
      res.send(error);
    });
});

router.get("/listfiles", (req, res) => {
  console.log("Entered list files");
  listFiles(
    `${
      process.env.REACT_APP_BACKEND_KEY || "http://localhost:8080/"
    }venus/files/listfiles`,
    req.headers
  )
    .then((response) => {
      console.log("Response", response);
      res.send(response);
    })
    .catch((error) => {
      console.log("ERROR:", error);
      res.send(error);
    });
});

router.get("/fetchcontent", (req, res) => {
  console.log("Fetch Content");
  const { name } = req.query;
  console.log(name);
  fetchcontent(
    `${
      process.env.REACT_APP_BACKEND_KEY || "http://localhost:8080/"
    }venus/files/fetch/` + name,
    req.headers
  )
    .then((response) => {
      console.log("Response", response);
      res.send(response);
    })
    .catch((error) => {
      console.log("ERROR:", error);
      res.send(error);
    });
});

export default router;
