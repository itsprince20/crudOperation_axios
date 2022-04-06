const databaseName = 'reqresdata'
const client = new MongoClient(url);
async function dbconnect()
{
    let result =await client.connect();
    db = result.db(databaseName);
    return db.collection('reqres');

}
module.exports = dbconnect;