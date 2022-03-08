const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@alias': 'src/components/aliasTest',
  })(config);

  return config;
};
