import AssignmentSubmissionModel from '../database/models/assignment_submission.model';
import IAssignmentSubmission from '../interfaces/assignment_submission.interface';

class AssignmentSubmissionService {
  async create(assignmentSubmissionData: IAssignmentSubmission) {
    return await AssignmentSubmissionModel.create(assignmentSubmissionData);
  }

  async getAll( page: number, limit: number ) {
    const skip = (page - 1) * limit;

    const assignmentSubmissions = await AssignmentSubmissionModel.find({ deleted: false })
      .limit(limit)
      .skip(skip)
      .sort({ createdAt: 'desc' })
      .select('-__v');

    const totalAssignmentSubmissionsCount = await AssignmentSubmissionModel.countDocuments({ deleted: false });

    return {
      assignmentSubmissions,
      totalAssignmentSubmissionsCount,
    };
  }

  async update(searchDetails: object, update: object) {
    return await AssignmentSubmissionModel.findOneAndUpdate({ ...searchDetails, deleted: false }, update, {
      new: true,
    });
  }

  async find(searchData: object) {
    return await AssignmentSubmissionModel.find({ ...searchData, deleted: false }).select('-__v');
  }

  async findOne(searchData: object) {
    return AssignmentSubmissionModel.findOne({ ...searchData, deleted: false }).select('-__v');
  }

  async softDelete(searchParams: object) {
    return await AssignmentSubmissionModel.findOneAndUpdate(
      { ...searchParams, deleted: false },
      { deleted: true },
      {
        new: true,
      },
    );
  }

  async hardDelete(searchParams: object) {
    return await AssignmentSubmissionModel.findOneAndDelete(searchParams);
  }
}

export const assignmentSubmissionService = new AssignmentSubmissionService();
