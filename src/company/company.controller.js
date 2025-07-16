import companyModel from "../../model/company.js";

const addCompany = async (req, res) => {
  try {
    const company = await companyModel.create(req.body);
    res.status(201).json({ message: "Company created successfully", company });
  } catch (error) {
    if (error.code === 11000) {
      // Duplicate key error
      return res.status(409).json({
        message: `Duplicate field: ${Object.keys(error.keyValue).join(", ")}`,
        error: error.keyValue,
      });
    }

    res.status(400).json({ message: "Validation or other error", error });
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
