// const data = 'Ahmad Temola';
// console.log(data);

const { error } = require("console");
const express = require("express");
const { get } = require("http");
const db = require("./connection");
// import express from "express";

const app = express();
const port = 5000;

app.get("/hello", (req, res) => {
  res.send("Ahmad Temola");
});

app.get("/", (req, res) => {
  res.status(200).send("Selamat Datang");
});

app.get("/user",(req,res)=>{
    res.json({
        nama:"Kiki Ramdani",
        pekerjaan:"Progamer Suka Suka",
    });
});


app.get("/find", (req, res) => {
  const kategori = req.query.kategori;
  const sql = `SELECT * FROM produk WHERE kategori = '${kategori}'`;

  db.query(sql, (error, result) => {
    res.json(result);
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
