var child_process = require('child_process')
var duplexer = require('duplexer')

var spawn = child_process.spawn

module.exports = function(cmd, args) {
    var spawned = spawn(cmd, args)

    return duplexer(spawned.stdin, spawned.stdout)
}
