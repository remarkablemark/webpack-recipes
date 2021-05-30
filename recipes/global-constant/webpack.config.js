const { DefinePlugin, IgnorePlugin } = require('webpack');

const { NODE_ENV } = process.env;

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
  },
  plugins: [
    NODE_ENV === 'production' &&
      new IgnorePlugin({
        resourceRegExp: /logger/,
      }),
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(NODE_ENV),
      },
    }),
  ].filter((plugin) => plugin),
};
