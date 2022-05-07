/* eslint-disable @typescript-eslint/no-var-requires, @typescript-eslint/no-floating-promises */
const cpFile = require('cp-file');
const process = require('process');

let env = 'development';

process.argv.forEach(function (val) {
  env = val;
});

(async () => {
	await cpFile(`./${env}.env`, ".env");
})();