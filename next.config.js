module.exports = {
  future: {
    webpack5: true,
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/archive",
        permanent: true,
      },
    ];
  },
};
