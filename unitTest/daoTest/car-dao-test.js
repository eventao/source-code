/**
 * Created by forli on 2017/3/6.
 */
let dataDao = require('../../mysql/car-dao');
let assert = require('assert');
let uuid = require('node-uuid');

describe('汽车数据操作', function() {
    it('添加汽车', function() {
        let id = uuid.v1();
        dataDao.createUser({
            id:id,
            carNo:"川A88888",
            userName:"Mr.zhu",
            password:"abc!@#123",
            status:0,
            remark:""
        }).then(function(r){
            assert.equal(r,null);
        });
    });
});