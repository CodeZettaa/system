import companyModel from "../../model/company.js";

const addCompany = async (req, res) => {
  try {
    const company = await companyModel.insertMany(req.body);
    res.json({ message: "Hi", company });
  } catch (error) {
    res.status(400).json({ message: "error", error });
  }
};

const getAll = async (req, res) => {
  try {
    const compnies = await companyModel.find();
    res.json({ message: "Hi", compnies });
  } catch (error) {
    res.status(400).json({ message: "error", error });
  }
};

export { addCompany, getAll };
