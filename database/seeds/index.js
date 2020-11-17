'use strict';

const _err = require('../../app/shared/helpers/error');

const commonSeeders = [
	'user',
	'oauth-client'
];

const seeders = {
	user: require('./user'),
	'oauth-client': require('./oauth-client')
};

const seederNotExists = (seederName) => !seeders[seederName];

module.exports = {
	async run(extras = null) {
		try {
			for (let seederName in commonSeeders) {
				if (seederNotExists(commonSeeders[seederName]))
					throw _err.createError('SEEDER_NOT_DEFINED', `${seederName} seeder not defined`);
				await seeders[commonSeeders[seederName]].run();
			}

			if (extras) {
				for (let seederName in extras) {
					if (seederNotExists(seederName))
						throw _err.createError('SEEDER_NOT_DEFINED', `${seederName} seeder not defined`);
					await seeders[seederName].run();
				}
			}
		} catch (err) {
			console.log('Some error while seeding', err);
		}
	},

	async runParticularSeed(seederData) {
		try {
			console.log(seederData)
			for (let seederName of seederData.seeder) {
				if (seederNotExists(seederName))
					throw _err.createError('SEEDER_NOT_DEFINED', `${seederName} seeder not defined`);
				await seeders[seederName].run(seederData.force);
			}
		} catch (err) {
			throw err;
		}
	}
};
