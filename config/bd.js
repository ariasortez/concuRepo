import mysql from "mysql2/promise";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Arias007!",
  database: "proyectoConcurrencia",
});

export default connection;
