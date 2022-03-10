const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@Components': 'src/Components/',
    '@alias': 'src/Components/aliasTest',
    '@alias1': 'src/Components/aliasTest/nivel1',
    '@alias2': 'src/Components/aliasTest/nivel1/nivel2',
    '@alias3': 'src/Components/aliasTest/nivel1/nivel2/nivel3',
  })(config);

  return config;
};
