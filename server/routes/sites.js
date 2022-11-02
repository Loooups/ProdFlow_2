import express from "express";
import { Router } from "express";
import mysql from "mysql2";

const router = express.Router();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "open",
  database: "NEWPRODFLOW",
});

const sitesFromBackEnd = [
  {
    Name: "SAMFONY Aubervilliers",
    Status: "Active",
    Address: "10 Avenue de la Republique",
    City: "Aubervilliers",
    ID_line: "1",
    Rate: "36",
    Employees: "560",
  },
];

// all routes in here are starting with /sites
router.get("/", (req, res) => {
  console.log(sitesFromBackEnd);
  res.json(sitesFromBackEnd);
});

router.get("/db/sites", (req, res) => {
  connection.connect();
  connection.query("SELECT * FROM Site", (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});

router.get("/db/address", (req, res) => {
  connection.connect();
  connection.query("SELECT * FROM Address", (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});

router.get("/db/productionLine", (req, res) => {
  connection.connect();
  connection.query("SELECT * FROM ProductionLine", (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});

router.get("/db/numberOfEmployees", (req, res) => {
  connection.connect();
  connection.query("SELECT * FROM NumberOfEmployees", (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});

router.post("/", (req, res) => {
  console.log("POST Route Reached");
  sitesFromBackEnd.push(req.body);
  res.send("POST Route Reached");
  console.log(sitesFromBackEnd);
});
export default router;
