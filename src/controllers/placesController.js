const db = require("../database/db");

module.exports = {
  // Lista todos
  list(req, res) {
    const query =
      req.query.state && req.query.city
        ? `SELECT * FROM places WHERE state = '${req.query.state}' AND city = '${req.query.city}'`
        : "SELECT * FROM places";

    const getPlacesFromDB = db.all(query, function (error, rows) {
      if (error) {
        res.render("search-results");
        return console.log(error);
      }

      const placesCount = rows.length;
      res.render("search-results", { places: rows, placesCount });
    });
  },

  // Lista individual
  // Create
  create(req, res) {
    const { name, image, address, number, state, city, selectedItems } =
      req.body;

    const query = `
  INSERT INTO places (
    name,
    image,
    address_street,
    address_number,
    state,
    city,
    items
  ) VALUES (?,?,?,?,?,?,?);`;
    const values = [name, image, address, number, state, city, selectedItems];
    function afterInsertData(error) {
      if (error) {
        return console.log(error);
      }
      console.log("Cadastrado com sucesso!");
      console.log(this);
      res.render("index", { saved: true });
    }
    db.run(query, values, afterInsertData);
  },
  // Update
  // Delete
};
