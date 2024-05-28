// next.config.js
const withTM = require('next-transpile-modules')(['canvas']);
const webpack = require('webpack');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports = withTM({
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.plugins.push(
        new webpack.DefinePlugin({
          'process.env': {
            fs: 'empty',
          },
        })
      );
    }

    // Add CSS support with PostCSS loader for Tailwind CSS
    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader', 'postcss-loader'],
    });

    return config;
  },
  experimental: {
    serverComponentsExternalPackages: ['pdf2json'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'http://localhost:3000/profile',
        port: '',
        pathname: '../../../public/**',
      },
    ],
  },
  // PostCSS configuration for Tailwind CSS
  postcss: {
    plugins: [
      tailwindcss,
      autoprefixer,
    ],
  },
});
