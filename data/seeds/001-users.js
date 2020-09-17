
exports.seed = async function(knex) {
  await knex("users").truncate()
  await knex("users").insert([
    {username: "Goku1", password: "abc", firstname: "John", location: "Tampa, FL"},
    {username: "sloppyJ", password: "abc1", firstname: "Joe", location: "Springfield, IL"},
    {username: "biblebelt", password: "abc2", firstname: "Joseph", location: "Dallas, TX"},
    {username: "cityboy", password: "abc3", firstname: "James", location: "Los Angeles, CA"}
  ]);
};
