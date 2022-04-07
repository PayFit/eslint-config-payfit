module.exports = {
  extends: [
    './rules/common/airbnb',
    './rules/common/import',
    './rules/common/prettier',
    './rules/common/comments',
    './rules/common/sonarjs',
  ],
  plugins: ['./plugins/no-mongo-objectid'],
}
