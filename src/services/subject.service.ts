import SubjectModel from '../database/models/subject.model';
import ISubject from '../interfaces/subject.interface';

class SubjectService {
  async create(subjectData: ISubject) {
    return await SubjectModel.create(subjectData);
  }

  async getAll( page: number, limit: number ) {
    const skip = (page - 1) * limit;

    const subjects = await SubjectModel.find({ deleted: false })
      .limit(limit)
      .skip(skip)
      .sort({ createdAt: 'desc' })
      .select('-__v');

    const totalSubjectsCount = await SubjectModel.countDocuments({ deleted: false });

    return {
      subjects,
      totalSubjectsCount,
    };
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

  async softDelete(searchParams: object) {
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
