require("dotenv").config();
const knex = require("knex");
const ShoppingListService = require("./shopping_list-service");

const knexInstance = knex({
  client: "pg",
  connection: process.env.DB_URL
});

ShoppingListService.getAllItems(knexInstance)
  .then(item => console.log(item))
  .then(()=> ShoppingListService.deleteItem(knexInstance, 34))
  .finally(() => knexInstance.destroy());
