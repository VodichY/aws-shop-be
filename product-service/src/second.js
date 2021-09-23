import { App } from '../lib/App';

export const getProductById = async (event) => {
  const ProducById = await App.handleSecond(event);
  return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(ProducById)
    }
};