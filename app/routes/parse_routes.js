const os = require('os');

module.exports = function(app, db) {
  app.get('/', (req, res) => {
    const ipAddress = req.ip;
    const language = req.headers["accept-language"].split(',')[0];
    const software = req.headers["user-agent"].split(/[()]/)[1];

    const somethingLanguage = "n/a";
    const somethingSoftware = "n/a";
    const output = { "IP Address": ipAddress, "Language": language, "Software": software };
    res.send(output);
  });
};
