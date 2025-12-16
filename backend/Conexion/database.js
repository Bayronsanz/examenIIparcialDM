const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(
    'productos',
    'root',
    '',
    {
        host: 'localhost',
        port: 3306,
        dialect: 'mysql'
    }
)

sequelize.authenticate()
    .then(() => console.log('Conexion exitosa'))
    .catch((error) => console.log('Ocurrio un error' + error));

module.exports = sequelize;