// const { alias } = require('react-app-rewire-alias');

// module.exports = function override(config) {
//   alias({
//     '@components': 'src/components',
//   })(config);

//   return config;
// };

const { alias, configPaths } = require('react-app-rewire-alias');

const aliasMap = configPaths('./jsconfig.paths.json');

module.exports = alias(aliasMap);
