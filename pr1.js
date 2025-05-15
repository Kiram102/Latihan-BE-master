
const { error } = require("console");
const express = require("express");
const { get } = require("http");
const db = require("./connection");
const app = express();
const port = 5000;


const bodyParser = require("body-parser");
app.use(bodyParser.json())

app.get("/ucap", (req, res) => {
  res.send("Selamat Siang Dari Server");
});

app.get("/", (req, res) => {
  res.status(200).send("Selamat Datang");
});

app.get("/data-diri",(req,res)=>{
    res.json({
        nama:"Kiki Ramdani",
        usia: 17,
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

// add //

app.post('/add-produk',(req,res)=>{
    const {id_produk,produk,kategori,harga_per_kg} = req.body;
    const sql = `INSERT INTO produk (id_produk,produk,kategori,harga_per_kg) VALUES (
    ${id_produk},"${produk}","${kategori}",${harga_per_kg})`;
    
    db.query(sql,(error,result)=>{
        if(error) throw error;
    });
    return res.status(200).send("ok");
});

// add //


// update //

app.put("/update/:id",(req,res)=>{
    const idproduk = req.params.id;
    const {produk,kategori,harga_per_kg} = req.body;
    const sql = `UPDATE produk SET produk = "${produk}", kategori = "${kategori}", harga_per_kg = ${harga_per_kg}
    WHERE id_produk = ${idproduk}`;

      db.query(sql,(error,result)=>{
        if(error) throw error;
    });
    return res.status(200).send("Data Telah Diubah");
});


// update //

// show //

app.get("/find/:id", (req, res) => {
  const idproduk = req.params.id;
  const sql = `SELECT * FROM produk WHERE id_produk = '${idproduk}'`;

  db.query(sql, (error, result) => {
    res.json(result);
  });
});

// show //

// delete //
app.delete("/delete/:id",(req,res)=>{
    const idproduk = req.params.id;
  const sql = `DELETE  FROM produk WHERE id_produk = '${idproduk}'`;

  db.query(sql, (error, result) => {
    res.json(result);
  });
   return res.status(200).send("Data Telah Dihapus");
});

// delete//


app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});