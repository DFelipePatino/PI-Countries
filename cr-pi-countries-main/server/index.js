const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');
const { saveCountriesInDb } = require("./src/controllers/controllersCountries.js")
const PORT = 3001;

conn.sync({ force: true }).then(() => {
  saveCountriesInDb();
  server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  })
}).catch(error => console.error(error))
