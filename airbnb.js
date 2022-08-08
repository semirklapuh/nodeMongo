const pipeline = require("./aggregations");
const { dbConnect } = require("./db");

function getDataWithAggregate() {
  const client = dbConnect();
  client.connect(async (err) => {
    const collection = client
      .db("sample_airbnb")
      .collection("listingsAndReviews");
    const agg = await collection.aggregate(pipeline.pipeline).toArray();
    console.log(agg);
    client.close();
  });
}

function getDataWithAggregate2() {
  const client = dbConnect();
  client.connect(async (err) => {
    const collection = client
      .db("sample_airbnb")
      .collection("listingsAndReviews");
    const agg = await collection.aggregate(pipeline.pipeline2).toArray();
    console.log(agg);
    client.close();
  });
}

module.exports = {
  getDataWithAggregate,
  getDataWithAggregate2,
};
