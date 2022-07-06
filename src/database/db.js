const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./src/database/database.db");

db.serialize(() => {
  // // -------------  Criando uma tabela  -------------
  db.run(`
  CREATE TABLE IF NOT EXISTS places (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    image TEXT,
    address_street TEXT,
    address_number INTEGER,
    state TEXT,
    city TEXT,
    items TEXT
  );
  `);
});

module.exports = db;
