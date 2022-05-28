const { Sequelize } = require('sequelize');

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('bd_videos', 'postgres', 'admin', {
    host: 'localhost',
    port: 5433,
    dialect: 'postgres' 
  });

const testconection = async () =>{
  try {
    await sequelize.authenticate();
    console.log('Connection to "bd_videos"  been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

testconection();

 

  module.exports = {sequelize} ;
  