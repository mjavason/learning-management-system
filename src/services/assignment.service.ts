import Model from '../database/models/assignment.model';
import Interface from '../interfaces/assignment.interface';

class AssignmentService {
  async create(data: Interface) {
    return await Model.create(data);
  }

  async getAll(page: number = 1, limit: number = 10) {
    const skip = (page - 1) * limit;

    return await Model.find({ deleted: false })
      .limit(limit)
      .skip(skip)
      .sort({ createdAt: 'desc' })
      .select('-__v');
  }

  async update(searchDetails: object, update: object) {
    return await Model.findOneAndUpdate({ ...searchDetails, deleted: false }, update, {
      new: true,
    });
  }

  async find(searchData: object) {
    return await Model.find({ ...searchData, deleted: false }).select('-__v');
  }

  async findOne(searchData: object) {
    return Model.findOne({ ...searchData, deleted: false }).select('-__v');
  }

  async softDelete(searchParams: object) {
    return await Model.findOneAndUpdate(
      { ...searchParams, deleted: false },
      { deleted: true },
      {
        new: true,
      },
    );
  }

  async hardDelete(searchParams: object) {
    return await Model.findOneAndDelete(searchParams);
  }
}

export const assignmentService = new AssignmentService();
