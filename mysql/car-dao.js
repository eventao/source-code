/**
 * Created by forli on 2017/3/1.
 */
let Sequelize = require('sequelize');
let sequelize = new Sequelize(
    'cardb','root','mysql'
    ,{
        host:'127.0.0.1',
        port:3306,
        dialect:'mysql'
    }
);
let carMsg = sequelize.define('Car',{
        id:{
            type:Sequelize.STRING,
            comment:'数据唯一标识',
            primaryKey: true
        }
        ,carNo:{
            type:Sequelize.STRING,
            comment:"车牌号"
        }
        ,userName:{
            type:Sequelize.STRING,
            comment:"用户名"
        }
        ,password:{
            type:Sequelize.STRING,
            comment:"密码"
        }
        ,status:{
            type:Sequelize.STRING,
            comment:"数据状态"
        }
        ,remark:{
            type:Sequelize.STRING,
            comment:"备用字段"
        }
    });

module.exports={
    createUser:function(p){
        return carMsg.sync({force:true}).then(function(){
            return carMsg.create(p).then(function(r){
                return r;
            });
        });
    },
    getUsers:function(p){
        // carMsg.find()
    },
    updateUser:function(p){
        // carMsg.update(p,
        //     {
        //         'where':{'id':p.id}
        //     }
        // );
    }
};
