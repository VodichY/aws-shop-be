'use strict';

const {
  productsList
} = require('./products');

module.exports.getProductById = async (event) => {
  const {
    pathParameters
  } = event;
  const product = productsList.find((elem) => pathParameters.productId === elem.id);
  if (product === undefined) {
    return {
      headers: {
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      statusCode: 404,
      body: JSON.stringify({}),
    };
  } else {
    return {
      headers: {
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      statusCode: 200,
      body: JSON.stringify(product),
    };
  }
};

module.exports.getProductsList = async (event) => {
  return {
    headers: {
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    },
    statusCode: 200,
    body: JSON.stringify(productsList)
  };
};
