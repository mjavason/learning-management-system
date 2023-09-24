import AssignmentModel from '../database/models/assignment.model';
import IAssignment from '../interfaces/assignment.interface';

class AssignmentService {
  async create(assignmentData: IAssignment) {
    return await AssignmentModel.create(assignmentData);
  }

  async getAll( page: number, limit: number ) {
    const skip = (page - 1) * limit;

    const assignments = await AssignmentModel.find({ deleted: false })
      .limit(limit)
      .skip(skip)
      .sort({ createdAt: 'desc' })
      .select('-__v');

    const totalAssignmentsCount = await AssignmentModel.countDocuments({ deleted: false });

    return {
      assignments,
      totalAssignmentsCount,
    };
  }

  async update(searchDetails: object, update: object) {
    return await AssignmentModel.findOneAndUpdate({ ...searchDetails, deleted: false }, update, {
      new: true,
    });
  }

  async find(searchData: object) {
    return await AssignmentModel.find({ ...searchData, deleted: false }).select('-__v');
  }

  async findOne(searchData: object) {
    return AssignmentModel.findOne({ ...searchData, deleted: false }).select('-__v');
  }

  async softDelete(searchParams: object) {
    return await AssignmentModel.findOneAndUpdate(
      { ...searchParams, deleted: false },
      { deleted: true },
      {
        new: true,
      },
    );
  }

  async hardDelete(searchParams: object) {
    return await AssignmentModel.findOneAndDelete(searchParams);
  }
}

export const assignmentService = new AssignmentService();
