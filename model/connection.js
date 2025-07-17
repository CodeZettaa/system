import mongoose from "mongoose";
import companyModel from "./company.js";

const connect = () => {
  mongoose
    .connect("mongodb+srv://systemAdmin:system@cluster0.lri9y.mongodb.net")
    .then(async (res) => {
      await companyModel.syncIndexes();
      console.log("connected");
    });
};

export default connect;
