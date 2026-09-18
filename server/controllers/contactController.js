const db = require("../config/db");


// ===============================
// CREATE CONTACT MESSAGE
// ===============================

const createContact = async (req, res) => {

    try {

        const {
            name,
            email,
            subject,
            message
        } = req.body;


        // Validation

        if (!name || !email || !message) {

            return res.status(400).json({
                success: false,
                message: "Name, email and message are required."
            });

        }


        const sql = `
            INSERT INTO contacts
            (name, email, subject, message)
            VALUES (?, ?, ?, ?)
        `;


        const [result] = await db.execute(
            sql,
            [
                name,
                email,
                subject || null,
                message
            ]
        );


        res.status(201).json({

            success: true,

            message:
                "Your message has been sent successfully.",

            contactId: result.insertId

        });

    }

    catch (error) {

        console.error(
            "Create contact error:",
            error
        );


        res.status(500).json({

            success: false,

            message:
                "Server error. Please try again later."

        });

    }

};


// ===============================
// GET ALL CONTACTS
// ===============================

const getContacts = async (req, res) => {

    try {

        const [rows] = await db.execute(`
            SELECT *
            FROM contacts
            ORDER BY created_at DESC
        `);


        res.json({

            success: true,

            data: rows

        });

    }

    catch (error) {

        console.error(
            "Get contacts error:",
            error
        );


        res.status(500).json({

            success: false,

            message: "Failed to fetch contacts."

        });

    }

};


module.exports = {
    createContact,
    getContacts
};