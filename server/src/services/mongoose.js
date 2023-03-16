import dotenv from "dotenv";
dotenv.config();
const { mongoose } = require("mongoose");

const connectDB = () => {
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB Atlas CONECTADO!"))
    .catch((err) =>
      console.log(
        `Não foi possível conectar MongoDB Atlas devido ao erro: ${err}`
      )
    );
};

module.exports = connectDB;
