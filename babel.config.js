// eslint-disable-next-line no-undef
module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'module:react-native-dotenv',
      [
        'module-resolver',
        {
          alias: {
            // This needs to be mirrored in tsconfig.json
            api: './src/api',
            components: './src/components',
            contexts: './src/contexts',
            hooks: './src/hooks',
            layouts: './src/layouts',
            screens: './src/screens',
            themes: './src/themes',
            translations: './src/translations',
            types: './src/types',
            utils: './src/utils',
            assets: './assets',
          },
        },
      ],
    ],
  }
}
