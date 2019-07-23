require("dotenv").config();

const knex = require("knex");

const knexInstance = knex({
  client: "pg",
  connection: process.env.DB_URL
});

// function getItems(searchTerm){
//     knexInstance
//     .select('*')
//     .from('shopping_list')
//     .where('name', 'ILIKE', `%${searchTerm}%`)
//     .then(res => {
//         console.log(res)
//     })
//     .finally(()=>knexInstance.destroy())
// }

// getItems('fish')

function paginate(pageNumber){
    const rowsPerPage = 6;
    const offset = rowsPerPage * (pageNumber - 1);

    knexInstance
    .select('*')
    .from('shopping_list')
    .limit(rowsPerPage)
    .offset(offset)
    .then(res=>{
        console.log(res)
    })
    .finally(()=>knexInstance.destroy())
}

paginate(3)