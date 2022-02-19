
const { info, warn, error } = require('./utils/logger')

info('success')
warn('something is odd')
error('something is wrong')
info('ok, my bad.', 'everything is alright')
warn('oh look')
error('isn`t it an Ethiopian flag?')
