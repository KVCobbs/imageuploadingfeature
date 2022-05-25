const express = require('express')
const multer = require('multer')
const path = require('path')
const app = express();


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images')
    },
    filename: (req, file, cb) => {
        console.log(file)
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

//this is the port
const PORT = 4000;

//middleware
//the storage object is where all the specifications of our file is determined

const upload = multer({storage: storage })

app.set("view engine", "ejs")

//routes
app.get("/upload", (req, res) => {
    res.render("upload")
})

app.post("/upload", upload.single("image"), (req, res) => {
    res.send("Image Uploaded")
});

//this is the port 
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});