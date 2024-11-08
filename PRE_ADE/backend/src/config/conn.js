import {Sequelize} from "sequelize"

const conn = new Sequelize('pre_ade3f', 'root', 'Sen@iDev77!.', {
    host: 'localhost',
    dialect: 'mysql'
});

export default conn;