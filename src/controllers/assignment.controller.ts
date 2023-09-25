import { Request, Response } from 'express';
import { assignmentService } from '../services';
import {
  SuccessResponse,
  InternalErrorResponse,
  SuccessMsgResponse,
  NotFoundResponse,
} from '../helpers/response';

class MaterialController {
  async create(req: Request, res: Response) {
    const data = await assignmentService.create(req.body);

    if (!data) return InternalErrorResponse(res);

    return SuccessResponse(res, data);
  }

  async getAll(req: Request, res: Response) {
    let pagination = parseInt(req.params.pagination);
    if(!pagination) pagination = 1;
    const data = await assignmentService.getAll(pagination);

    if (!data) return InternalErrorResponse(res);
    if (data.length === 0) return NotFoundResponse(res);

    return SuccessResponse(res, data);
  }

  async find(req: Request, res: Response) {
    const data = await assignmentService.find(req.query);

    if (!data) return InternalErrorResponse(res);
    if (data.length === 0) return NotFoundResponse(res);

    return SuccessResponse(res, data);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const data = await assignmentService.update({ _id: id }, req.body);

    if (!data) return InternalErrorResponse(res);

    return SuccessResponse(res, data);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const data = await assignmentService.softDelete({ _id: id });

    if (!data) return InternalErrorResponse(res);
    return SuccessResponse(res, data);
  }

  // Admins only
  async hardDelete(req: Request, res: Response) {
    const { id } = req.params;
    const data = await assignmentService.hardDelete({ _id: id });

    if (!data) return InternalErrorResponse(res);
    return SuccessResponse(res, data);
  }
}

export const assignmentController = new MaterialController();
