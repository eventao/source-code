/**
 * Created by forli on 2017/3/2.
 */
let dataDao = require('../../mysql/user-dao');
let assert = require('assert');
let uuid = require('node-uuid');

describe('用户数据操作', function() {
    let rIt = it('添加用户', function() {
        let id = uuid.v1();
        let r = dataDao.createUser({
            id:id,
            "user-name":"mini-go",
            email:"example@163.com",
            password:"abc!@#123"
        });
        assert.equal(r,null);
    });

});