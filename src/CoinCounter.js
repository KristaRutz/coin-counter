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
}
