import { getProductsList } from '../src/functions/getProductsList/handler';
import { getProductById } from '../src/functions/getProductById/handler';
import { productsList } from '../src/lib/products';

test('getProductsList', async () => {
  const data = await getProductsList();
    expect(data.statusCode).toBe(200);
    expect(JSON.parse(data.body)).toEqual(productsList);
},30000);

test('getProductById', async () => {
  const event = {
    pathParameters: {
      productId: '8facc84d-cf96-4dbd-aa50-acf976defb1d'
    }      
  };
  const data = await getProductById(event);
    expect(data.statusCode).toBe(200);
    expect(JSON.parse(data.body).id).toBe('8facc84d-cf96-4dbd-aa50-acf976defb1d');
},30000);