const db=require('../model/index.model');
const usertbl=db.usertbl;
const sequelize=db.sequelize;
const Sequelize=db.Sequelize;
module.exports={
    getallUsers:(req, res, next) =>{
        // usertbl.findAll({})
        sequelize.query('select * from usertbl',{
            replacements: [],
            type: Sequelize.SELECT
          }).then((data)=>{
            res.send({error:false, data:data[0]});
        }).catch((err)=>{
            res.send({error:true, err:err});
        })
    },
    createUser:(req, res, next) =>{
        const user ={
            name:req.body.name,
            email:req.body.email,
            mobile:req.body.mobile,
            password:req.body.password
        }
        usertbl.create(user).then((data)=>{
            res.send({error:false, data:data,message:"user created"});
        }).catch((err)=>{
            res.send({error:true, err:err});
        })
    },
    updateUser:(req,res) =>{
        let userid=req.body.id;
        usertbl.update({isActive:false},{where:{id:userid}}).then((data)=>{
            if(data>0){
                res.send({error:false, message:"User updated"});
            }else{
                res.send({error:false, message:"User not updated"}); 
            }
        }).catch((err)=>{
            res.send({error:true, err:err});
        })
    },
    deleteUser:(req,res, next) =>{
        let userid=req.body.id;
        usertbl.destroy({where:{id:userid},truncate:false}).then((data)=>{
            if(data>0){
                res.send({error:false, message:"User deleted"});
            }else{
                res.send({error:false, message:"User not deleted"}); 
            }
            
        }).catch((err)=>{
            res.send({error:true, err:err});
        })
    }
}