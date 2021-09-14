// module.exports = {
//   reactStrictMode: true,
// }
module.exports = {
  webpack: config => {
    config.module.rules.push({
      test: /\.tsx?$/,
      loader: 'eslint-loader',
      exclude: /node_modules/
    })
    return config
  }
}
