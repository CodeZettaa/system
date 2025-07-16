import mongoose, { Schema } from "mongoose";

const companySchema = new Schema(
  {
    name: { type: String, required: true },
    company: { type: String, required: true },
    email: { type: String, required: true, unique: true },

    country: { type: String, required: true, unique: true },
    system: { type: String, required: true, unique: true },
    phone: { type: String },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    inactive: { type: Boolean, default: false },
    collectionRepresentative: { type: Boolean, default: false },
    agentsRepresentative: { type: Boolean, default: false },
    salesRepresentative: { type: Boolean, default: false },
    accessAllCharges: { type: Boolean, default: false },
    hideOthersRecords: { type: Boolean, default: false },
    responsible: { type: Boolean, default: false },
    expeditor: { type: Boolean, default: false },
    accessAllOperationsFinances: { type: Boolean, default: false },
    changePassword: { type: Boolean, default: false },
    role: { type: String, default: "ADMINISTRATION" }, // assuming role is fixed per form
  },
  {
    timestamps: true,
  }
);

const companyModel = mongoose.model("company", companySchema);
export default companyModel;
