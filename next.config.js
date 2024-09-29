module.exports = {
  // output: "export", // comment this line while development
  assetPrefix: "/",
  // basePath: "", // Optional: uncomment if you have a base path
  swcMinify: true,
  images: {
    unoptimized: true, // Keep this if you don't need optimized images
  },
  trailingSlash: true, // Use trailingSlash instead of exportTrailingSlash
  async redirects() {
    return [
      {
        source: "/blog",
        destination: "/",
        permanent: true,
      },
    ];
  },
};