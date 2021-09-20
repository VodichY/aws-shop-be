const {
  getProductsList
} = require('../first');
const {
  getProductById
} = require('../second');

const { productsList } = require('../../products');

test('getProductsList', async () => {
  const data = await getProductsList();
    expect(data.statusCode).toBe(200);
    expect(JSON.parse(data.body)).toEqual(productsList);
},30000);

test('getProductById', async () => {
  const event = {
    pathParameters: {
      productId: "8facc84d-cf96-4dbd-aa50-acf976defb1d"
    }      
  };
  const data = await getProductById(event);
    expect(data.statusCode).toBe(200);
    expect(JSON.parse(data.body).id).toBe("8facc84d-cf96-4dbd-aa50-acf976defb1d");
},30000);