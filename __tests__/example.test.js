import { CoinCounterUSD } from "./../src/CoinCounter.js";

// describe('Triangle', () => {

//   test('should correctly create a triangle object with three lengths', () => {
//     var triangle = new Triangle(2,4,5);
//     expect(triangle.side1).toEqual(2);
//     expect(triangle.side2).toEqual(4);
//     expect(triangle.side3).toEqual(5);
//   });
// });

describe("CoinCounterUSD", () => {
  test("should return '1 penny' for 1 cent of change", () => {
    expect(CoinCounterUSD.GetChangeDistribution(1)).toEqual({ pennies: 1 });
  });

  test("should return '4 pennies' for 4 cents of change", () => {
    expect(CoinCounterUSD.GetChangeDistribution(4)).toEqual({ pennies: 4 });
  });
});

describe("CoinCounterUSD.GetChangeInPennies", () => {
  test("should return int '1' for 1 cent of change", () => {
    expect(CoinCounterUSD.GetChangeInPennies(1)).toEqual(1);
  });
});

describe("CoinCounterUSD.GetChangeInNickels", () => {
  test("should return int '1' for 5 cent of change", () => {
    expect(CoinCounterUSD.GetChangeInNickels(5)).toEqual(1);
  });
});

describe("CoinCounterUSD.GetChangeIn...", () => {
  test("should return int 'x' for x cents of change", () => {
    expect(CoinCounterUSD.GetChangeInPennies(452)).toEqual(452);
  });

  test("'Nickels' should return int 'x/5' for x cents of change", () => {
    expect(CoinCounterUSD.GetChangeInNickels(452)).toEqual(90);
  });

  test("'Dimes' should return int 'x/10' for x cents of change", () => {
    expect(CoinCounterUSD.GetChangeInDimes(452)).toEqual(45);
  });

  test("'Quarters' should return int 'x/25' for x cents of change", () => {
    expect(CoinCounterUSD.GetChangeInQuarters(452)).toEqual(18);
  });

  test("'HalfDollars' should return int 'x/50' for x cents of change", () => {
    expect(CoinCounterUSD.GetChangeInHalfDollars(452)).toEqual(9);
  });

  test("'Dollars' should return int 'x/100' for x cents of change", () => {
    expect(CoinCounterUSD.GetChangeInDollars(452)).toEqual(4);
  });
});
