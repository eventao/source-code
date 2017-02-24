/**
 * Created by forli on 2017/2/22.
 */
let User = {};
User.get = function get(username, callback) {
    users.findOne({name:username}, function(err, doc){
        if (err) {
            return callback(err, null);
        }
        return callback(err, doc);
    });
};
module.exports = User;

