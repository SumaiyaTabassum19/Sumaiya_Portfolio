const express = require("express");
const cors = require("cors");

const contactRoutes = require("./routes/contactRoutes");

const app = express();


// ===============================
// MIDDLEWARE
// ===============================

app.use(
    cors({
        origin: "http://localhost:5173"
    })
);

app.use(express.json());


// ===============================
// BASIC TEST ROUTE
// ===============================

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Sumaiya Portfolio API is running."
    });
});


// ===============================
// CONTACT ROUTES
// ===============================

app.use(
    "/api/contacts",
    contactRoutes
);


module.exports = app;