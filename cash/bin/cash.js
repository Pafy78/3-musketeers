/** @module ./cash */
const got = require('got');
const money = require('money');
const chalk = require('chalk');
const ora = require('ora');

/*
 *Json file contain default currency set by the user
 */
const currencies = require('../lib/currencies.json');

/*
 *Call API to make the conversion
 */
const API = 'https://api.fixer.io/latest';

/*
 *Display the result of the conversion action
 *@name convert
 *@param {int} amount - amount to convert
 *@param {string} to - base currency label 
 *@param {string} from - result currency label
 *@param {json} response - json contain all exchange rate from the API
 *@param {json} loading - loading json variable to manage a loading display
 *@return 
 */
const convert = configuration => {
  const {amount, to, from, response, loading} = configuration;

  money.base = response.body.base;
  money.rates = response.body.rates;

  to.forEach(item => {
    if (currencies[item]) {
      loading.succeed(
        `${chalk.green(
          money.convert(amount, {from, 'to': item}).toFixed(2)
        )} ${`(${item})`} ${currencies[item]}`
      );
    } else {
      loading.warn(`${chalk.yellow(` The ${item} currency not found `)}`);
    }
  });

  console.log();
  console.log(
    chalk.underline.gray(
      ` Conversion of ${chalk.bold(from)} ${chalk.bold(amount)}`
    )
  );
  process.exit(1);
};

/*
 *Display convertion or error if some happen
 *@name cash
 *@return 
 */
const cash = async command => {
  const amount = command.amount;
  const from = command.from.toUpperCase();
  const to = command.to
    .filter(item => item !== from)
    .map(item => item.toUpperCase());

  console.log();
  const loading = ora({
    'text': 'Converting currency...',
    'color': 'green',
    'spinner': {
      'interval': 200,
      'frames': to
    }
  });

  loading.start();

  try {
    const response = await got(API, {'json': true});

    convert({amount, to, from, response, loading});
  } catch (err) {
    if (err.code === 'ENOTFOUND') {
      loading.fail(chalk.red('   Please check your internet connection.\n'));
    } else {
      loading.fail(chalk.red('   Internal server error... \n'));
    }

    process.exit(1);
  }
};

module.exports = cash;
