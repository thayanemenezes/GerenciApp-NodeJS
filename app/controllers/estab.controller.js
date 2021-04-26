const db = require("../models");
const Estab = db.estabs;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
          message: "Conteúdo não pode estar vazio."
        });
        return;
      }

      const estab = {
        name: req.body.name,
        cnpj: req.body.cnpj,
        published: req.body.published ? req.body.published : false
      };
    
      Estab.create(estab)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Algum erro aconteceu durante a criação."
          });
        });
    };

exports.findAll = (req, res) => {
  
    const name = req.query.name;
    var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
  
    Estab.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Algum erro aconteceu durante a criação."
        });
      });
  };

exports.findOne = (req, res) => {

    const id = req.params.id;

    Estab.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Erro durante estab de id=" + id
        });
      });
  };

exports.update = (req, res) => {

    const id = req.params.id;

    Estab.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Dados atualizados com sucesso!."
          });
        } else {
          res.send({
            message: `Error ao atualizar dados de id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error ao atualizar dados de id=" + id
        });
      });
  };

exports.delete = (req, res) => {

    const id = req.params.id;

    Estab.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Estabelecimento excluido com sucesso."
          });
        } else {
          res.send({
            message: `Erro ao excluir estabelecimento=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Estab with id=" + id
        });
      });
  };

exports.deleteAll = (req, res) => {3

    Estab.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} estabelecimento excluído com sucesso.` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Algum erro aconteceu."
          });
        });
    };

exports.findAllPublished = (req, res) => {

    Estab.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Algum erro aconteceu."
      });
    });
};