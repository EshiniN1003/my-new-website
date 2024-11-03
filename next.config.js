const path = require('path');

const nextConfig = {
  output: 'export',
  assetPrefix: '/my-new-website/', // Replace with your repository name
  basePath: '/my-new-website',      // Same as above
  trailingSlash: true,               // Optional: helps with routing
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: [
      'media.dev.to',
      'avatars.githubusercontent.com',
      'github-readme-stats.vercel.app',
      'github-readme-streak-stats.herokuapp.com',
      'stardev.io',
      'github-profile-summary-cards.vercel.app',
      'github-profile-trophy.vercel.app'
    ],
    dangerouslyAllowSVG: true,
  },
};

module.exports = nextConfig;
