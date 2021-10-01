import { getById } from '../../products/index';
import { formatJSONResponse } from '../../lib/apiGateway'

export const getProductById = async (event) => {
  const ProducById = await getById(event);
  return formatJSONResponse(200, ProducById);
};