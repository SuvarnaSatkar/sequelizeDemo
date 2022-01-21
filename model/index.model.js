const Sequelize=require('sequelize');
const sequelize = new Sequelize('studentdb', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });

  sequelize.authenticate().then(()=>{
    console.log('connected')
  }).catch(err=>{
    console.log("not connected with DB");
  })

const db={};
db.sequelize=sequelize;
db.Sequelize=Sequelize;
db.usertbl=require('./users.model')(sequelize,Sequelize);
module.exports=db;
