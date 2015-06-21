'strict';

module.exports = function (messages) {
    return messages.map(function (message_obj) {
            return message_obj.message
        })
        .filter(function (message) {
            return message.length < 50
        })
}
