module.exports = {
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
