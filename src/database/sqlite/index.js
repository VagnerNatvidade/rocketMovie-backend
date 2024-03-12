const sqlite3 = require("sqlite3");
const sqlite = require("sqlite");
// resolve the addresses
const path = require("path");

async function sqliteConnection() {
  // set objects of connection
  const database = await sqlite.open({
    // local to save the database
    filename: path.resolve(__dirname, "..", "database.db"),
    // drive of connection
    driver: sqlite3.Database,
  });

  return database;
}

module.exports = sqliteConnection;
