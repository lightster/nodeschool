'use strict';

module.exports = function (userIds, load, done) {
    var users = []
    userIds.forEach(function (userId) {
        load(userId, function (user) {
            users.push(user)
        })
    })
    done(users)
}
