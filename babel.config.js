// eslint-disable-next-line no-undef
module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            // This needs to be mirrored in tsconfig.json
            components: './src/components',
            contexts: './src/contexts',
            hooks: './src/hooks',
            screens: './src/screens',
            themes: './src/themes',
            translations: './src/translations',
            assets: './assets',
          },
        },
      ],
    ],
  }
}
