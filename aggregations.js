const pipeline = [
  {
    $match: {
      accommodates: {
        $gt: 4,
      },
      price: {
        $lt: 500,
      },
      amenities: "Hair dryer",
    },
  },
  {
    $sort: {
      price: 1,
    },
  },
  {
    $project: {
      name: 1,
      amenities: 1,
      price: 1,
      images: 1,
      description: 1,
    },
  },
  {
    $limit: 20,
  },
];

const pipeline2 = [
  {
    $match: {
      amenities: "Cable TV",
    },
  },
  {
    $sort: {
      price: 1,
    },
  },
  {
    $match: {
      property_type: "Apartment",
      beds: {
        $eq: 1,
      },
    },
  },
  {
    $project: {
      _id: 1,
      name: 1,
      description: 1,
      property_type: 1,
      room_type: 1,
      bedrooms: 1,
      beds: 1,
      price: 1,
    },
  },
];

module.exports = {
  pipeline,
  pipeline2,
};
