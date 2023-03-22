module.exports = {
  name: 'movies',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};
