module.exports = {
  distDir: 'build',
  watchOptions: {
    poll: true
  },
  externals: {
    fs: 'fs'
  },
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.md$/,
        use: [
          { loader: 'emit-file-loader?output=dist/[path][name].[ext]' },
          { loader: 'raw-loader' }
        ]
      }
    )
    return config;
  }
};
