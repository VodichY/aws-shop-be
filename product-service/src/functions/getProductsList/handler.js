import { list } from '../../products/index';
import { formatJSONResponse } from '../../lib/apiGateway';

export const getProductsList = async () => {
  const ProductsList = await list();
  return formatJSONResponse(200, ProductsList);
};