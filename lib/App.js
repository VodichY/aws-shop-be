import { Client } from "pg";

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

export class App {
  static async handleFirst() {
    const client = new Client(dbOptions);
    await client.connect();

    const query = `select 
products.id, 
products.title, 
products.description, 
products.size, 
products.color, 
stock.count, 
products.price 
from products join stock on products.id = stock.product_id;`;

    const ProductsList = await client.query(query);
    await client.end();
    const { rows } = ProductsList;
    return rows;
  }

  static async handleSecond(event) {
    const { pathParameters } = event;
    const client = new Client(dbOptions);
    await client.connect();

    const query = `select 
products.id, 
products.title, 
products.description, 
products.size, 
products.color, 
stock.count, 
products.price 
from products join stock on products.id = stock.product_id
where products.id = '${pathParameters.productId}';`;

    const ProducById = await client.query(query);
    await client.end();
    const { rows } = ProducById;
    return rows[0];
  }
}
