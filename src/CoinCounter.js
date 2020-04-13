const penny = 1;
const nickel = 5;
const dime = 10;
const quarter = 25;
const halfDollar = 50;
const dollar = 100;

const changeIn = function (cents) {
  return 1 / cents;
};

const ChangeInPennies = changeIn(penny);
const ChangeInNickels = changeIn(nickel);
const ChangeInDimes = changeIn(dime);
const ChangeInQuarters = changeIn(quarter);
const ChangeInHalfDollars = changeIn(halfDollar);
const ChangeInDollars = changeIn(dollar);

export class CoinCounterUSD {
  constructor() {
    const penny = 1;
    const nickel = 5;
    const dime = 10;
    const quarter = 25;
    const halfDollar = 50;
    const dollar = 100;
  }

  static GetChangeDistribution(cents) {
    return { pennies: cents };
  }

  static GetChangeInPennies(cents) {
    return cents;
  }

  static GetChangeInNickels(cents) {
    return Math.floor(cents / 5);
  }

  static GetChangeInDimes(cents) {
    return Math.floor(cents / 10);
  }

  static GetChangeInQuarters(cents) {
    return Math.floor(cents / 25);
  }

  static GetChangeInHalfDollars(cents) {
    return Math.floor(cents / 50);
  }

  static GetChangeInDollars(cents) {
    return Math.floor(cents / 100);
  }
}
