module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/gamedev-portfolio/' // <--- ESTO ES LO CLAVE
    : '/'
}