import { Schema, model, Types } from "mongoose";
import IMaterial from "../../interfaces/material.interface";
import { DATABASES } from "../../constants";

const MaterialSchema = new Schema<IMaterial>(
  {
    subject_id: {
      type: Schema.Types.ObjectId,
      ref: DATABASES.SUBJECT,
      required: true,
      autopopulate: true, // Enable autopopulate for this field
    },
    link: {
      type: String,
      required: true,
    },
    deleted: {
      type: Boolean,
      required: true,
      select: false,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Apply the mongoose-autopopulate plugin to the schema
MaterialSchema.plugin(require('mongoose-autopopulate'));

const MaterialModel = model<IMaterial>(
  DATABASES.MATERIAL,
  MaterialSchema
);

export default MaterialModel;
