/**
Metro configuration for React Native
https://github.com/facebook/react-native
@Format
*/
module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
};