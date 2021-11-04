const upload = require("../middleware/upload");
const express = require("express");
const router = express.Router();

router.post("/upload", upload.single("file"), async (req, res) => {
    // if (req.file === undefined) return res.send("you must select a file.");
    const { file, body: {name} } = req;
    const imgUrl = `http://localhost:5000/file/${req.file.filename}`;
    //tutaj dodac, zeby tego samego nie dodwalo
    return res.send(imgUrl);
});

module.exports = router;
