module.exports.clean = function(msg) {
    return msg.replace(/[\u0000-\u001f\u007f§]/g, '');
}
module.exports.limit = function(string = '', limit = 0) {
    return string.substring(0, limit)
}
module.exports.choose = function(array) {
    return array[Math.floor(Math.random() * array.length)]
}