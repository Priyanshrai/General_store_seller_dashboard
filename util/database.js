const Sequelize=require("sequelize");
const sequelize = new Sequelize('general-store','root','password',
{
    dialect : 'mysql',
    host : 'localhost'
});

module.exports=sequelize;