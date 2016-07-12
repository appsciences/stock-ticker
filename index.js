if (process.env.NODE_ENV === 'production') {
  require('./build/server/server.bundle');
} else {
  require('./server');
}
