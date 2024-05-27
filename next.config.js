/** @type {import('next').NextConfig} */
// const withTM = require('next-transpile-modules')(['canvas']);

// const nextConfig = {
//   experimental: {
//     serverComponentsExternalPackages: ["pdf2json"],
//   },
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "http://localhost:3000/profile",
//         port: "",
//         pathname: "../../../public/**",
//       },
//     ],
//   },
//   webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
//     // Add a rule for handling binary files with node-loader
//     config.module.rules.push({
//       test: /\.(node)$/i,
//       use: 'node-loader',
//     });

//     // Add CSS support with CSS loader for custom CSS files
//     config.module.rules.push({
//       test: /\.css$/i,
//       exclude: /node_modules/,
//       use: ['style-loader', 'css-loader'],
//     });

//     // Use the default CSS handling for CSS files in node_modules
//     config.module.rules.push({
//       test: /\.css$/i,
//       include: /node_modules/,
//       use: defaultLoaders.css,
//     });

//     return config;
//   },
// };

// module.exports = withTM(nextConfig);
// next.config.js
// const withTM = require('next-transpile-modules')(['canvas']);

// module.exports = withTM({
//   webpack: (config, { isServer }) => {
//     if (!isServer) {
//       config.node = {
//         fs: 'empty',
//       };
//     }

//     return config;
//   },
//   experimental: {
//     serverComponentsExternalPackages: ['pdf2json'],
//   },
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'http://localhost:3000/profile',
//         port: '',
//         pathname: '../../../public/**',
//       },
//     ],
//   },
// });

// module.exports = {
//   webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
//     // Add a rule for handling binary files with node-loader
//     config.module.rules.push({
//       test: /\.(node)$/i,
//       use: 'node-loader',
//     });

//     // Add CSS support with CSS loader for custom CSS files
//     config.module.rules.push({
//       test: /\.css$/i,
//       exclude: /node_modules/,
//       use: ['style-loader', 'css-loader', 'postcss-loader'],
//     });

//     // Use the default CSS handling for CSS files in node_modules
//     config.module.rules.push({
//       test: /\.css$/i,
//       include: /node_modules/,
//       use: defaultLoaders.css,
//     });

//     return config;
//   },
// };
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
