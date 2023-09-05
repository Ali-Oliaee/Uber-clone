const path = require('path');

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        alias: {
          '@components': path.resolve(__dirname, 'src/components'),
          '@assets': path.resolve(__dirname, 'src/assets'),
          '@screens': path.resolve(__dirname, 'src/screens'),
        },
      },
    ],
    'jest-hoist',
  ],
};
