/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const path = require('path');
//const blacklist = require('metro').createBlacklist;
const blacklist = require('metro-config/src/defaults/exclusionList');

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  /**
   * Add "global" dependencies for our RN project here so that our local components can resolve their
   * dependencies correctly
   */
  resolver: {
    extraNodeModules: {
    },
    blacklistRE: blacklist([
      /nodejs-assets\/.*/,
      /android\/.*/,
      /ios\/.*/
    ])
  },
 /**
   * Add our workspace roots so that react native can find the source code for the included packages
   * in the monorepo
   */
  projectRoot: path.resolve(__dirname),
  watchFolders: [
  ]
};