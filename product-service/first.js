import { App } from "../lib/App";

export const getProductsList = async () => {
  const ProductsList = await App.handleFirst();
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(ProductsList),
  };
};
