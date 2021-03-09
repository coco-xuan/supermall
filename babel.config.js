const prodPugins = []
if (process.env.NODE_ENV === 'production') {
  prodPugins.push('transform-remove-console')
}

module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins: [
    ...prodPugins,
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant'],
    '@babel/plugin-syntax-dynamic-import'
  ]
}
