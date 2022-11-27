module.exports = {
  url() {
    let usr = (process.env.DB_USER && process.env.DB_PASSWORD)
      ? `${process.env.DB_USER}:${process.env.DB_PASSWORD}@`
      : '';
    return `mongodb://${usr}${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?authSource=admin`
  }
};