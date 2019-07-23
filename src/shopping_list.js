require("dotenv").config();
const knex = require("knex");
const ShoppingListService = require("./shopping_list-service");

const knexInstance = knex({
  client: "pg",
  connection: process.env.DB_URL
});

ShoppingListService.getAllItems(knexInstance)
  .then(item => console.log(item))
  .then(() =>
    ShoppingListService.addItem(knexInstance, {
      name: "Test for Add",
      price: "6.00",
      date_added: new Date(),
      checked: true,
      category: "Breakfast"
    })
  )
  .finally(() => knexInstance.destroy());
