import { Sequelize } from "sequelize";
import { config } from "dotenv";
config();

const isProduction = process.env.NODE_ENV === "production";

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  logging: process.env.NODE_ENV === "development" ? console.log : false,
  define: {
    timestamps: true,
    underscored: true,
    freezeTableName: true,
  },
  dialectOptions: {
    ssl: isProduction
      ? false
      : {
          require: true,
          rejectUnauthorized: false,
        },
  },
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexão com o banco de dados estabelecida com sucesso.");
  } catch (error) {
    console.error(
      "Não foi possível conectar ou sincronizar com o banco de dados:",
      error
    );
  }
};

export { sequelize, connectDB };
