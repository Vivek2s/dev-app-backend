'use strict'

const env = require('./config/environments');
const app = require('./bootstrap/app');
const PORT = env.PORT || 3000;
const clusterBoot = require('./bootstrap/boot');
const { logger } = require('./config/logger');

if (env.CLUSTERED === 'true' || env.NODE_ENV === 'production') {
    clusterBoot();
}
else {
    app.listen(PORT, () => {
        logger.info(`Process ${process.pid} is listening to all incoming requests on port ${PORT}`);
    });
}