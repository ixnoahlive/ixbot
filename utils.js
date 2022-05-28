module.exports.clean = function(msg) {
    return msg.replace(/[\u0000-\u001f\u007f§]/g, '');
}
module.exports.limit = function(string = '', limit = 0) {
    return string.substring(0, limit)
}
module.exports.choose = function(array) {
    return array[Math.floor(Math.random() * array.length)]
}
module.exports.makeTime = function(ms) {
    let secs = Math.ceil(Math.abs(ms) / 1000)
    if (secs < 0) secs = 0
    let days = Math.floor(secs / 86400)
    if (days) secs -= days * 86400
    let timestamp = `${ms < 0 ? "-" : ""}${days ? `${days}d + ` : ""}${[Math.floor(+secs / 3600), Math.floor(+secs / 60) % 60, +secs % 60].map(v => v < 10 ? "0" + v : v).filter((v,i) => v !== "00" || i > 0).join(":")}`
    if (timestamp.length > 5) timestamp = timestamp.replace(/^0+/, "")
    if (timestamp.startsWith('-')) timestamp = "00:00"
    return timestamp
}