import mysql from "mysql2";

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

export const getSitesFromBackEnd = (req, res) => {
  console.log(sitesFromBackEnd);
  res.json(sitesFromBackEnd);
};

export const getSitesFromDB = (req, res) => {
  connection.connect();
  connection.query("SELECT * FROM Site", (error, results) => {
    if (error) throw error;
    res.json(results);
  });
};

export const getAllAddressFromDB = (req, res) => {
  connection.connect();
  connection.query("SELECT * FROM Address", (error, results) => {
    if (error) throw error;
    res.json(results);
  });
};

export const getAllProdcutionLinesFromDB = (req, res) => {
  connection.connect();
  connection.query("SELECT * FROM ProductionLine", (error, results) => {
    if (error) throw error;
    res.json(results);
  });
};

export const getAllInformationOfId = (req, res) => {
  let siteId = req.params.id;
  connection.connect();
  connection.query(
    "SELECT Site.Id_site, Name, Status, Employees, Address, City, ZipCode, ID_line, Rate FROM Site JOIN Address A ON Site.Id_site = A.Id_site JOIN ProductionLine ON Site.Id_site = ProductionLine.Id_site WHERE Site.Id_site=?",
    [siteId],

    (error, results) => {
      if (error) throw error;
      res.json(results);
    }
  );
};

export const postFromBackEnd = (req, res) => {
  console.log("POST Route Reached");
  sitesFromBackEnd.push(req.body);
  res.send("POST Route Reached");
  console.log(sitesFromBackEnd);
};

export const getAllDB = (req, res) => {
  let siteId = req.params.id;
  connection.connect();
  connection.query(
    "SELECT Site.Id_site, Name, Status, Employees, Address, City, ZipCode, ID_line, Rate FROM Site JOIN Address A ON Site.Id_site = A.Id_site JOIN ProductionLine ON Site.Id_site = ProductionLine.Id_site",
    (error, results) => {
      if (error) throw error;
      res.json(results);
    }
  );
};
