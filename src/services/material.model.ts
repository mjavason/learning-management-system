import MaterialModel from '../database/models/material.model';
import IMaterial from '../interfaces/material.interface';

class MaterialService {
  async create(materialData: IMaterial) {
    return await MaterialModel.create(materialData);
  }

  async getAll( page: number, limit: number ) {
    const skip = (page - 1) * limit;

    const materials = await MaterialModel.find({ deleted: false })
      .limit(limit)
      .skip(skip)
      .sort({ createdAt: 'desc' })
      .select('-__v');

    const totalMaterialsCount = await MaterialModel.countDocuments({ deleted: false });

    return {
      materials,
      totalMaterialsCount,
    };
  }

  async update(searchDetails: object, update: object) {
    return await MaterialModel.findOneAndUpdate({ ...searchDetails, deleted: false }, update, {
      new: true,
    });
  }

  async find(searchData: object) {
    return await MaterialModel.find({ ...searchData, deleted: false }).select('-__v');
  }

  async findOne(searchData: object) {
    return MaterialModel.findOne({ ...searchData, deleted: false }).select('-__v');
  }

  async softDelete(searchParams: object) {
    return await MaterialModel.findOneAndUpdate(
      { ...searchParams, deleted: false },
      { deleted: true },
      {
        new: true,
      },
    );
  }

  async hardDelete(searchParams: object) {
    return await MaterialModel.findOneAndDelete(searchParams);
  }
}

export const materialService = new MaterialService();
