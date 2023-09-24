import SubjectModel from '../database/models/subject.model';
import ISubject from '../interfaces/subject.interface';

class SubjectService {
  async create(subjectData: ISubject) {
    return await SubjectModel.create(subjectData);
  }

  async getAll(page: number = 1, limit: number = 10) {
    const skip = (page - 1) * limit;

    return await SubjectModel.find({ deleted: false })
      .limit(limit)
      .skip(skip)
      .sort({ createdAt: 'desc' })
      .select('-__v');
  }

  async update(searchDetails: object, update: object) {
    return await SubjectModel.findOneAndUpdate({ ...searchDetails, deleted: false }, update, {
      new: true,
    });
  }

  async find(searchData: object) {
    return await SubjectModel.find({ ...searchData, deleted: false }).select('-__v');
  }

  async findOne(searchData: object) {
    return SubjectModel.findOne({ ...searchData, deleted: false }).select('-__v');
  }

  //soft delete
  async delete(searchParams: object) {
    return await SubjectModel.findOneAndUpdate(
      { ...searchParams, deleted: false },
      { deleted: true },
      {
        new: true,
      },
    );
  }

  async hardDelete(searchParams: object) {
    return await SubjectModel.findOneAndDelete(searchParams);
  }
}

export const subjectService = new SubjectService();
