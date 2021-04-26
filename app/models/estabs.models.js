module.exports = (sequelize, Sequelize) => {
    const Estab = sequelize.define("estabelecimentos", {

      name: {
        type: Sequelize.STRING
      },
      cnpj: {
        type: Sequelize.BOOLEAN
      },
    });
  
    return Estab;
  };