const path = require('path');
const { override, addWebpackAlias } = require('customize-cra');

module.exports = override(
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
    '@images': path.resolve(__dirname, 'src/assets/images'), 
    '@modules': path.resolve(__dirname, 'src/modules'),
    '@shares': path.resolve(__dirname, 'src/shares'),
    '@styles': path.resolve(__dirname, 'src/styles'),
    '@provider': path.resolve(__dirname, 'src/provider'),
  })
);
