# Convert cash library


- [Introduction](#introduction)
- [How it word](#how-it-word)
- [Additionnal functionnality ](#additionnal-functionnality)
- [Licence](#licence)

## Introduction

This library allow you to convert an amount in a currency to another. In additionnal some function are avaible.  
You can find all currency available : http://akep.us/currencies

## How it work ?
 
**Simple functionnality, convert an amout from a currency to another :**
```sh
❯ node bin/index.js <"amount"> <"base_currency"> <"result_currency1"> <"result_currency2">
```
-  Amount value (INT) represent the currency amount you want to convert.
-  Base_currency is the currency diminutive name of your amount value (List of the currency : http://akep.us/currencies)
-  Result_currency is the currency diminutive name of the convert result you need (List of the currency : http://akep.us/currencies).You can add result_currency as much as you want.

**Example :**
```sh
❯ node bin/index.js 100 EUR USD GBP

124.21 (USD) US Dollar
89.46 (GBP) Pound Sterling
Conversion of EUR 100
```

## Additionnal functionnality  

**Change default currency :** 
```sh
❯ node bin/index.js --save <"base_currency"> <"result_currency1"> <"result_currency2">
```
-  Base_currency is the currency diminutive name to set to default as base.
-  Result_currency is the currency diminutive name to set to default as result.

**Example :**
```sh
❯ node bin/index.js --save EUR USD GPB

Saved default currencies to C:\...\config.json
```

## Licence
*Pierre Baudoin © Copyright. Tous droits réservés.*