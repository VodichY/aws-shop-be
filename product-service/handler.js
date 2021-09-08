'use strict';

const { productsList } = require('./products');

module.exports.getProductById = async (event) => {
  const { pathParameters } = event;
  const product = productsList.find((elem) => pathParameters.productId === elem.id);
  if (product === undefined) {
    return {
      statusCode: 404,
      body: JSON.stringify({}),
    };
  } else {
    return {
      statusCode: 200,
      body: JSON.stringify(product),
    };
  }  
};

module.exports.getProductsList = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify (productsList)
  };
};
