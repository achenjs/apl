exports.getUrl = function (host, port, path, type) {
    var options = {
        host: host,
        port: port,
        path: path,
        method: type,
        headers: {
          'Content-Type': 'application/json'
        }
    };
    return options
};
