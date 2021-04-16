module.exports = {
  extends: '@loopback/eslint-config',
  parserOptions: {
    sourceType: "module",
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.eslint.json"],
  },
};
