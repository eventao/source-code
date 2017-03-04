/**
 * Created by forli on 2017/3/1.
 */
let Sequelize = require('sequelize');
let sequelize = new Sequelize(
    'oadb','root','mysql'
    ,{
        host:'127.0.0.1',
        port:3306,
        dialect:'mysql'
    }
);
let user = sequelize.define('User',{
    id:{
        type:Sequelize.STRING,
        comment:'用户id，唯一标识',
        primaryKey: true
    }
    ,"user-name":{
        type:Sequelize.STRING,
        comment:"用户名"
    }
    ,email:{
        type:Sequelize.STRING,
        comment:"邮箱"
    }
    ,password:{
        type:Sequelize.STRING,
        comment:"密码"
    }
    ,status:{
        type:Sequelize.INTEGER,
        comment:"数据状态"
    }
    ,remark:{
        type:Sequelize.JSON,
        comment:"备用字段"
    }
});

// user.sync().then(function(){
//     console.log("sync");
// });

module.exports={
    createUser:function(p){
        user.create(p).then(function(){
            console.log("create success!");
        });
    },
    getUsers:function(p){
        // user.find()
    },
    updateUser:function(p){
        // user.update(p,
        //     {
        //         'where':{'id':p.id}
        //     }
        // );
    }
};
