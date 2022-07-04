// CONFIGURANDO BANCO DE DADOS SQLite

// Instalar o pacote SQLite3
//    $ npm install sqlite3

const sqlite3 = require("sqlite3").verbose();

// Cria o arquivo que salvará todos os comandos SQL realizados
const db = new sqlite3.Database("./src/database/database.db");

// Utiliza o objeto db para realizar as operações
db.serialize(() => {
  // // -------------  Criando uma tabela  -------------
  // db.run(`
  // CREATE TABLE IF NOT EXISTS places (
  //   id INTEGER PRIMARY KEY AUTOINCREMENT,
  //   name TEXT,
  //   image TEXT,
  //   address_street TEXT,
  //   address_number INTEGER,
  //   state TEXT,
  //   city TEXT,
  //   items TEXT
  // );
  // `);
  // // -------------  Inserindo dados  -------------
  // // Ex1
  // db.run(`
  //   INSERT INTO places (
  //     name,
  //     image,
  //     address_street,
  //     address_number,
  //     state,
  //     city,
  //     items
  //   ) VALUES (?,?,?,?,?,?,?);
  // `);
  // Ex2
  // const query = `
  // INSERT INTO places (
  //   name,
  //   image,
  //   address_street,
  //   address_number,
  //   state,
  //   city,
  //   items
  // ) VALUES (?,?,?,?,?,?,?);`;
  // const values = [
  //   "Papersider",
  //   "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  //   "Marechal Floriano",
  //   "1010",
  //   "Paraná",
  //   "Londrina",
  //   "organicos",
  // ];
  // function afterInsertData(error) {
  //   if (error) {
  //     return console.log(error);
  //   }
  //   console.log("Cadastrado com sucesso!");
  //   console.log(this);
  // }
  // db.run(query, values, afterInsertData);
  // // -------------  Consultando dados  -------------
  // db.all(`SELECT * FROM places`, function (error, rows) {
  //   if (error) {
  //     return console.log(error);
  //   }
  //   console.log("Lista de registros: ");
  //   console.log(rows);
  // });
  // // -------------  Deletando dados  -------------
  // const placeId = 1;
  // db.run(
  //   `DELETE FROM places WHERE id = ${placeId}`,
  //   [placeId],
  //   function (error) {
  //     if (error) {
  //       return console.log(error);
  //     }
  //     console.log("Registro deletado com sucesso! ");
  //   }
  // );
});

module.exports = db;
