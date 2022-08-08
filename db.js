const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://mongo:mongo123@cluster0.gsq4gdj.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

function dbConnect() {
  return client;
}

module.exports = { dbConnect };
