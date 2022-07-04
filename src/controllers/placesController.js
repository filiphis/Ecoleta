const db = require("../database/db");

module.exports = {
  // Lista todos
  async list(req, res) {
    const getPlacesFromDB = await db.all(
      `SELECT * FROM places`,
      function (error, rows) {
        if (error) {
          res.render("search-results");
          return console.log(error);
        }

        const placesCount = rows.length;
        res.render("search-results", { places: rows, placesCount });
      }
    );
  },

  // Lista individual
  // Create
  // Update
  // Delete
};
