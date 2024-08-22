module.exports = {
  module: {
    rules: [
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 10000, // if the video is less than 10KB, it will be inlined as a base64 string
            name: "[name].[hash].[ext]",
            outputPath: "videos/",
          },
        },
      },
      // other rules
    ],
  },
};
