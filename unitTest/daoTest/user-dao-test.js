/**
 * Created by forli on 2017/3/2.
 */
let dataDao = require('../../mysql/user-dao');
let assert = require('assert');
describe('用户数据操作', function() {
    let rIt = it('添加用户', function() {
        let r = dataDao.createUser({
            id:3,
            "user-name":"mini-go",
            email:"example@163.com",
            password:"abc!@#123"
        });
        assert.equal(r,null);
    });

});