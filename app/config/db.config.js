module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "saturn@19",
    DB: "estabs",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };