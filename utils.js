module.exports.clean = function(msg) {
    return msg.replace(/[\u0000-\u001f\u007f§]/g, '');
}