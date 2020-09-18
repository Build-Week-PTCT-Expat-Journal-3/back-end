const bcrypt = require("bcryptjs");

exports.seed = async function(knex) {
  await knex("users").truncate()
  await knex("users").insert([
    {username: "Goku1", password: bcrypt.hashSync("abc", 10), firstname: "John", location: "Tampa, FL"},
    {username: "sloppyJ", password: bcrypt.hashSync("abc1", 10), firstname: "Joe", location: "Springfield, IL"},
    {username: "biblebelt", password: bcrypt.hashSync("abc2", 10), firstname: "Joseph", location: "Dallas, TX"},
    {username: "cityboy", password: bcrypt.hashSync("abc3", 10), firstname: "James", location: "Los Angeles, CA"}
  ]);
};
