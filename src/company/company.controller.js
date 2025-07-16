import companyModel from "../../model/company.js";

const addCompany = async (req, res) => {
  const company = await companyModel.insertMany(req.body);
  res.json({ message: "Hi", company });
};

const getAll = async (req, res) => {
  const compnies = await companyModel.find();
  res.json({ message: "Hi", compnies });
};

export { addCompany, getAll };
