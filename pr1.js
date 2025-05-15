
const { error } = require("console");
const express = require("express");
const { get } = require("http");
const app = express();
const port = 5000;

app.get("/ucap", (req, res) => {
  res.send("Selamat Siang Dari Server");
});

app.get("/", (req, res) => {
  res.status(200).send("Selamat Datang");
});

app.get("/data-diri",(req,res)=>{
    res.json({
        nama:"Kiki Ramdani",
        usia: 7,
        kota:"Cibaduyut",
    });
});




app.get("/salam", (req, res) => {
  

const data = req.query.data;
const nama = `Salam Kenal ${data}`
  

if(data){
  res.send(nama);
}else{
  res.send("Siapa Kamu");
}
});




app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});