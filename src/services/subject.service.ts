import Model from '../database/models/subject.model';
import Interface from '../interfaces/subject.interface';

class SubjectService {
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
    }).select('-__v');
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
    ).select('-__v');
  }

  async hardDelete(searchParams: object) {
    return await Model.findOneAndDelete(searchParams).select('-__v');
  }
}

export const subjectService = new SubjectService();
