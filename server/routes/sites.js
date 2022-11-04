import express from "express";

import {
  getSitesFromBackEnd,
  getSitesFromDB,
  getAllAddressFromDB,
  getAllProdcutionLinesFromDB,
  getAllInformationOfId,
  postFromBackEnd,
  getAllDB,
} from "../Controllers/sites.js";

const router = express.Router();

// all routes in here are starting with /sites
router.get("/", getSitesFromBackEnd);

router.get("/db/sites", getSitesFromDB);

router.get("/db/address", getAllAddressFromDB);

router.get("/db/productionLine", getAllProdcutionLinesFromDB);

router.get("/:id/allInformations", getAllInformationOfId);

router.get("/db/alldb", getAllDB);

router.post("/", postFromBackEnd);

export default router;
