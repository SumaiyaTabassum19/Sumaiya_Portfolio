const dotenv = require("dotenv");

const app = require("./app");

const db = require("./config/db");


// Load environment variables

dotenv.config();


// ===============================
// SERVER PORT
// ===============================

const PORT = process.env.PORT || 5000;


// ===============================
// TEST DATABASE CONNECTION
// ===============================

const startServer = async () => {

    try {

        await db.query("SELECT 1");

        console.log("MySQL database connected successfully.");


        app.listen(PORT, () => {

            console.log(
                `Server running on http://localhost:${PORT}`
            );

        });

    }

    catch (error) {

        console.error(
            "MySQL connection failed:"
        );

        console.error(error.message);

    }

};


startServer();