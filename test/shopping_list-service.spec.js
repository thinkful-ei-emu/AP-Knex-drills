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

      return ShoppingListService.getAllItems(db).then(actual => {
        expect(actual).to.eql(expectedItems);
      });
    });
  });

  context("Given shopping_list has no data", () => {
    it("getAllItems() resolves an empty arr", () => {
      return ShoppingListService.getAllItems(db).then(actual => {
        expect(actual).to.eql([]);
      });
    });

    it("addItem adds an item", () => {
      const newItem = {
        name: "Test",
        price: "1.00",
        date_added: new Date("2029-01-22T16:28:32.615Z"),
        checked: false,
        category: "Breakfast"
      }
      return ShoppingListService.addItem(db, newItem)
      .then(actual=>{
        expect(actual).to.eql({
          id: 1,
          name: newItem.name,
          price: newItem.price,
          date_added: newItem.date_added,
          checked: newItem.checked,
          category: newItem.category
        })
      })
    });
  });
});
