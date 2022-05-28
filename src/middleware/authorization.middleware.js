const { sequelize } = require("../services/bd.service");

const authorization = async (request, response, next) => {
  const token = request.headers.authorization;
  let sql =
    "SELECT id, name, token FROM usuarios WHERE token = :t";

  let usuariosResults = await sequelize.query(sql, {
    replacements: {
      t: token,
    },
  });

  if (usuariosResults && usuariosResults.length > 0) {
      try {
          
          request.usuarioId = usuariosResults[0][0].usu_codigo;
          next();
      } catch (error) {
        response.send({
            success: false,
            error: 'No se pudo autenticar'
        })          
      }
  } else {
    response.send({
        success: false,
        error: 'No se pudo autenticar'
    })
  }
};

module.exports = {
  authorization,
};
