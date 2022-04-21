const { Sequelize, DataTypes, Model } = require("sequelize");
const { config } = require("../modules/configuration.module");

const sequelize = new Sequelize({
    dialect: 'postgres',
    host: config.DB_HOST,
    username: config.DB_USER,
    password: config.DB_PASS,
    database: config.DB_NAME,
});

class Post extends Model {}

Post.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Post",
  }
);

Post.sync();
module.exports = Post;
