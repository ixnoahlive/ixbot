module.exports.clean = function(msg) {
    return msg.replace(/[\u0000-\u001f\u007f§]/g, '');
}
module.exports.getTps = function(client) {
    let sdiff = (new Date().valueOf() - client.lastTimeUpdate) / 1000;
    let tps = Math.min(Math.max(20/sdiff, 0), 20).toFixed(2);
    return tps
}