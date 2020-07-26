import { Request, Response } from 'express';

import { container } from 'tsyringe';

import CreateOrderService from '@modules/orders/services/CreateOrderService';
import FindOrderService from '@modules/orders/services/FindOrderService';

export default class OrdersController {
  public async show(request: Request, response: Response): Promise<Response> {
    const findOrderService = container.resolve(FindOrderService);
    const { id } = request.params;

    const show = await findOrderService.execute({ id });

    return response.json(show);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const createOrderService = container.resolve(CreateOrderService);
    const { customer_id, products } = request.body;

    const create = await createOrderService.execute({ customer_id, products });

    return response.json(create);
  }
}
