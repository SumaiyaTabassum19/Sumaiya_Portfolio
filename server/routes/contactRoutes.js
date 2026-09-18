const express = require("express");

const {
    createContact,
    getContacts
} = require("../controllers/contactController");


const router = express.Router();


// POST /api/contacts

router.post(
    "/",
    createContact
);


// GET /api/contacts

router.get(
    "/",
    getContacts
);


module.exports = router;