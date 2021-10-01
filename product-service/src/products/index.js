import { Client } from 'pg';

const { PG_HOST, PG_PORT, PG_DB, PG_USER, PG_PASSWORD } = process.env;

const dbOptions = {
  host: PG_HOST,
  port: PG_PORT,
  database: PG_DB,
  user: PG_USER,
  password: PG_PASSWORD,
  ssl: {
    rejectUnauthorized: false,
  },
  connectonTimeoutMillis: 5000,
};

const getconnect = async () => {
  const client = new Client(dbOptions);
  await client.connect();
  return client;
}

export const list = async () => {
  const client = await getconnect();
  const query = `select 
  products.id, 
  products.title, 
  products.description, 
  products.size, 
  products.color, 
  stock.count, 
  products.price 
  from products join stock on products.id = stock.product_id;`;

  const List = await client.query(query);
  await client.end();
  const { rows } = List;
  return rows;
};

export const getById = async (event) => {
  const { pathParameters } = event;
  const client = await getconnect();
  const query = 
  `select 
  products.id, 
  products.title, 
  products.description, 
  products.size, 
  products.color, 
  stock.count, 
  products.price 
  from products join stock on products.id = stock.product_id
  where products.id = '${pathParameters.productId}';`;

  const Product = await client.query(query);
  await client.end();
  const { rows } = Product;
  return rows[0];
};