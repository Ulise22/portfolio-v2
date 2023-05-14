module.exports = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.module.rules.push({
        test: /\.pdf$/,
        use: 'file-loader'
      })
    }
    return config
  }
}
