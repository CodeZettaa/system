import mongoose from "mongoose";

const connect = () => {
  mongoose
    .connect("mongodb+srv://systemAdmin:system@cluster0.lri9y.mongodb.net")
    .then((res) => console.log("connetc"));
};

export default connect;
