const mysql = require("mysql2/promise");

const run = async () => {
  const pool = mysql.createPool({
    host: "localhost",
    user: "admin_user",
    password: "secret_password",
    database: "phone_shop",
    connectionLimit: 20,
  });

  // const result = await pool.execute(`

  //   `);
  // SELECT brandId, COUNT(*) AS totalProduct FROM product GROUP BY brandId ORDER BY totalProduct DESC
  // SELECT COUNT(*) AS totalProduct FROM product
  // SELECT p.name AS productName, p.price, b.name AS brandName FROM product AS p LEFT JOIN brand as b ON p.brandId = b.id
  // SELECT id, name FROM brand
  // SELECT * FROM brand WHERE name LIKE "A%"
  // SELECT * FROM brand
  // Result is an array.
  //result = [ rows, fields ]
  //example row from workbench
  //id        name           createdAt                   updatedAt
  //1         Apple   2023-08-31T08:17:17.873Z    2023-08-31T08:17:17.873Z
  // { id: 1, name: 'Apple', createdAt: 'xxx', updatedAt: 'yyy' }
  // { id: 2, name: ... }
  // rows = { obj1, obj2, obj3, ... }

  const u = "aaa";
  const p = "asdfasfd";
  const sql = `SELECT * FROM user WHERE username = ? AND password = ?`;
  console.log(sql);
  const result = await pool.execute(sql, [u, p]);
  console.log(result);
};

run();

// const pool = mysql.createPool({
//   host: "localhost",
//   user: "admin_user",
//   password: "secret_password",
//   database: "nodejs_mysql",
//   connectionLimit: 20,
// });

// const result = await pool.execute(`SELECT * FROM user`);
// console.log(result);

//RESULT FROM INSERT INTO, UPDATE, DELETE is in array with fixed lenght (2).
// result = [ ResultSetHeader, undefined ]
// const result = await pool.execute(`
// INSERT INTO user (username, password) VALUES ("john", "123456")
// `);

// const result = await pool.execute(`
//   UPDATE user SET password = "654321" WHERE id > 3
//   `);

// const result = await pool.execute(`
// DELETE FROM user WHERE id < 4
// `);

// console.log(result);

// const result = await pool.execute(`
//   CREATE TABLE IF NOT EXISTS user (
//     id INT PRIMARY KEY AUTO_INCREMENT,
//     username VARCHAR(40) NOT NULL UNIQUE,
//     password VARCHAR(255) NOT NULL,
//     isActive BOOLEAN NOT NULL DEFAULT false
//   )
//   `);

// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "admin_user",
//   password: "secret_password",
//   database: "phone_shop",
// });

// connection
//   .then(() => console.log("connect to mysql server successfully"))
//   .catch((err) => console.log(err));

// const pool = mysql.createPool({
//   host: "localhost",
//   user: "admin_user",
//   password: "secret_password",
//   database: "nodejs_mysql",
//   connectionLimit: 20,
// });

// const result = await connection.query(`
//     CREATE TABLE IF NOT EXISTS todo(
//     id INT PRIMARY KEY AUTO_INCREMENT,
//     title VARCHAR(255) NOT NULL
//     )`);

// console.log(result);
