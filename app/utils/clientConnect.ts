const { Pool: Client } = require('pg');
require("dotenv").config();

const client = new Client({
    connectionString: process.env.DATABASE_URL,
    /* user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT, */
    ssl: {
        rejectUnauthorized: false
      }
});

    client.connect()
    .then(() => {
        console.log("Connected to database");
    })
    .catch((error : Error) => {
        console.log("Error connecting to database:", error);
    });



export default client;