module.exports = {
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: 'root(7425464)',
    DB: 'node_sequelize_mysql',
    dialect: 'mysql',

    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}