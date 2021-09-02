const {
  getProductsList,
  getProductById
} = require('../handler');

const { productsList } = require('../products');

test('getProductsList', () => {
  return getProductsList().then(data => {
    expect(data.statusCode).toBe(200);
    expect(JSON.parse(data.body)).toEqual(productsList);
  });
});

test('getProductById', () => {
  const event = {
    pathParameters: {
      productId: "99039f46-7543-42be-b075-9ba8cfcd4891"
    }      
  };
  return getProductById(event).then(data => {
    expect(data.statusCode).toBe(200);
    expect(JSON.parse(data.body).id).toBe("99039f46-7543-42be-b075-9ba8cfcd4891");
  });
});