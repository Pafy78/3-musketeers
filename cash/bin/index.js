#!/usr/bin/env node

const Conf = require('conf');
const helpers = require('./helpers.js');
const cash = require('./cash.js');

const config = new Conf();

const argv = process.argv.slice(2);

/*
 *Call the helpers action with parameter in the cmd
 */
helpers(argv);

/*
 * Take parameter in the cmd and format it to a json variable name command
 */
const command = {
  'amount': argv[0] || 1,
  'from': argv[1] || config.get('defaultFrom', 'USD'),
  'to':
    argv.length > 2
      ? process.argv.slice(4)
      : config.get('defaultTo', ['USD', 'EUR', 'GBP'])
};

/*
 *Call the cash action with command variable (format cmd parameters)
 */
cash(command);
