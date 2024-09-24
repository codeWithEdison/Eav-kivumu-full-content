const express = require("express");
const mysql = require("mysql2");
const dotenv = require("dotenv");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Connect to MySQL database
let db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.stack);
    return;
  }
  console.log("Connected to MySQL database");
});

// Middleware to parse JSON
app.use(express.json());

// Swagger options
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Student Management API",
      version: "1.0.0",
      description: "API for managing students",
    },
    servers: [
      {
        url: `http://localhost:${port}`,
      },
    ],
  },
  apis: ["./src/index.js"], // Update this to point to your file
};

// Swagger setup
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * components:
 *   schemas:
 *     Student:
 *       type: object
 *       required:
 *         - lname
 *         - fname
 *         - email
 *         - age
 *         - address
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated ID of the student
 *         lname:
 *           type: string
 *           description: The last name of the student
 *         fname:
 *           type: string
 *           description: The first name of the student
 *         email:
 *           type: string
 *           description: The email of the student
 *         age:
 *           type: integer
 *           description: The age of the student
 *         address:
 *           type: string
 *           description: The address of the student
 *       example:
 *         id: 1
 *         lname: Doe
 *         fname: John
 *         email: johndoe@example.com
 *         age: 22
 *         address: 123 Main St
 */

/**
 * @swagger
 * /api/students:
 *   get:
 *     summary: Returns a list of all students
 *     tags: [Students]
 *     responses:
 *       200:
 *         description: A list of students
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Student'
 */
app.get("/api/students", (req, res) => {
  const sql = "SELECT * FROM students";
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    return res.json(results);
  });
});

/**
 * @swagger
 * /api/students:
 *   post:
 *     summary: Creates a new student
 *     tags: [Students]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Student'
 *     responses:
 *       200:
 *         description: The student was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Student'
 *       500:
 *         description: Some server error
 */
app.post("/api/students", (req, res) => {
  const { lname, fname, email, age, address } = req.body;
  const sql = `INSERT INTO students (lname, fname, address, email, age) VALUES (?, ?, ?, ?, ?)`;
  db.query(sql, [lname, fname, address, email, age], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    return res.json({
      message: "Student added successfully",
      id: results.insertId,
    });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
  

// errorr handling midleware

app.use((err, req, res, next)=>{
    console.error(err.stack);
    res.status(500).send('Something broke!');
})