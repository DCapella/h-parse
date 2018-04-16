const parseRoutes = require('./parse_routes');

module.exports = function(app, db) {
  parseRoutes(app, db);
};
