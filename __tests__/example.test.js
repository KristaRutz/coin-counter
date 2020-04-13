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
  test("should pass an empty test", () => {});

  test("should return '1 penny' for 1 cent of change", () => {
    expect(CoinCounterUSD.GetChangeDistribution(1)).toEqual({ pennies: 1 });
  });

  test("should return '5 pennies' for 5 cents of change", () => {
    expect(CoinCounterUSD.GetChangeDistribution(5)).toEqual({ pennies: 5 });
  });
});
