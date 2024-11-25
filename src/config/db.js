const mysql = require('mysql2');

// Directly hardcoding the database connection details
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',  // Use your MySQL username
  password: 'Ruma@123#', // Replace with your actual MySQL password
  database: 'blogdb', // Replace with your actual database name
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.message);
    process.exit(1); // Exit if connection fails
  }
  console.log('Connected to MySQL database.');
});

module.exports = db;
