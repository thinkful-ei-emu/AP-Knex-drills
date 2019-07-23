const ShoppingListService = require("../src/shopping_list-service");
const knex = require("knex");

let testItems = [
  {
    id: 1,
    name: "Apples",
    price: "1.00",
    date_added: new Date("2029-01-22T16:28:32.615Z"),
    checked: false,
    category: "Main"
  },

  {
    id: 2,
    name: "Oranges",
    price: "2.00",
    date_added: new Date("2100-05-22T16:28:32.615Z"),
    checked: false,
    category: "Snack"
  },

  {
    id: 3,
    name: "Bananas",
    price: "3.00",
    date_added: new Date("1919-12-22T16:28:32.615Z"),
    checked: false,
    category: "Lunch"
  }
];

describe("Shopping List service object", () => {
  let db;

  before(() => {
    db = knex({
      client: "pg",
      connection: process.env.TEST_DB_URL
    });
  });

  before(() => db("shopping_list").truncate());

  afterEach(() => db("shopping_list").truncate());

  after(() => db.destroy());

  context("Given shopping_list has data", () => {
    beforeEach(() => {
      return db.into("shopping_list").insert(testItems);
    });

    it("getAllItems()", () => {
      const expectedItems = testItems;

      return ShoppingListService.getAllItems(db)
      .then(actual=>{
          expect(actual).to.eql(expectedItems)
      })
    });
  });
});
