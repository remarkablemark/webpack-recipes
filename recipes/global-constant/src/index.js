if (process.env.NODE_ENV === 'development') {
  const logger = require('./logger');
  logger('hi');
}
